-- ============================================================
-- QUINIELA WORLD CUP 2026 — Supabase Schema
-- Ejecutá esto en Supabase > SQL Editor > New Query
-- ============================================================

-- 1. Tabla de perfiles de usuario (extiende auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Predicciones de partidos de grupo
CREATE TABLE predictions (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  match_id TEXT NOT NULL,           -- ej: "GM001"
  home_score INT,
  away_score INT,
  is_joker BOOLEAN DEFAULT FALSE,   -- comodín x2
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, match_id)
);

-- 3. Predicciones de eliminatorias
CREATE TABLE knockout_predictions (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  stage_id TEXT NOT NULL,           -- ej: "R16_1"
  home_score INT,
  away_score INT,
  is_joker BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, stage_id)
);

-- 4. Predicciones especiales (campeón y goleador)
CREATE TABLE special_predictions (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  champion TEXT,
  top_scorer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Resultados reales (solo admin puede escribir)
CREATE TABLE results (
  id BIGSERIAL PRIMARY KEY,
  match_id TEXT UNIQUE NOT NULL,    -- ej: "GM001" o "R16_1"
  home_score INT,
  away_score INT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Equipos de eliminatorias (admin los define)
CREATE TABLE knockout_teams (
  stage_id TEXT PRIMARY KEY,
  home_team TEXT,
  away_team TEXT
);

-- 7. Resultados especiales
CREATE TABLE special_results (
  id INT PRIMARY KEY DEFAULT 1,     -- solo 1 fila
  champion TEXT,
  top_scorer TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
INSERT INTO special_results (id) VALUES (1) ON CONFLICT DO NOTHING;

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE predictions ENABLE ROW LEVEL SECURITY;
ALTER TABLE knockout_predictions ENABLE ROW LEVEL SECURITY;
ALTER TABLE special_predictions ENABLE ROW LEVEL SECURITY;
ALTER TABLE results ENABLE ROW LEVEL SECURITY;
ALTER TABLE knockout_teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE special_results ENABLE ROW LEVEL SECURITY;

-- Profiles: cada quien ve todos, solo edita el suyo
CREATE POLICY "Ver todos los perfiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Editar propio perfil" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Insertar propio perfil" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Predictions: cada quien ve todas, solo edita las suyas
CREATE POLICY "Ver todas las predicciones" ON predictions FOR SELECT USING (true);
CREATE POLICY "Editar propias predicciones" ON predictions FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Ver knockout predictions" ON knockout_predictions FOR SELECT USING (true);
CREATE POLICY "Editar propias knockout predictions" ON knockout_predictions FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Ver special predictions" ON special_predictions FOR SELECT USING (true);
CREATE POLICY "Editar propias special predictions" ON special_predictions FOR ALL USING (auth.uid() = user_id);

-- Resultados: todos ven, solo admin escribe (se maneja desde el panel admin con service key)
CREATE POLICY "Ver resultados" ON results FOR SELECT USING (true);
CREATE POLICY "Admin escribe resultados" ON results FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
);

CREATE POLICY "Ver knockout teams" ON knockout_teams FOR SELECT USING (true);
CREATE POLICY "Admin escribe knockout teams" ON knockout_teams FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
);

CREATE POLICY "Ver special results" ON special_results FOR SELECT USING (true);
CREATE POLICY "Admin escribe special results" ON special_results FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
);

-- ============================================================
-- FUNCIÓN: crear perfil automáticamente al registrarse
-- ============================================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
