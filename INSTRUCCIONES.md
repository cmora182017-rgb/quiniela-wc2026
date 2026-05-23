# 🏆 Quiniela World Cup 2026 — Guía de Instalación

Seguí estos 4 pasos y en ~20 minutos tenés el link listo para compartir.

---

## PASO 1 — Crear la base de datos en Supabase (5 min)

1. Entrá a https://supabase.com y hacé clic en **"Start your project"**
2. Iniciá sesión con Google
3. Hacé clic en **"New project"**
   - Organization: la que aparece por defecto
   - Name: `quiniela-wc2026`
   - Database Password: anotá una contraseña segura (no la necesitás después)
   - Region: elegí **US East** o **South America**
4. Esperá ~2 minutos a que se cree el proyecto

5. En el menú izquierdo andá a **SQL Editor** → **New Query**
6. Abrí el archivo `supabase-schema.sql` de esta carpeta, copiá TODO el contenido y pegalo en el editor
7. Hacé clic en **Run** (botón verde)
   ✅ Debería decir "Success. No rows returned"

8. Ahora andá a **Project Settings** → **API**
   - Copiá el valor de **Project URL** (algo como `https://abcdef.supabase.co`)
   - Copiá el valor de **anon public** key

---

## PASO 2 — Subir el código a GitHub (3 min)

1. Entrá a https://github.com y creá una cuenta si no tenés
2. Hacé clic en **"New repository"**
   - Name: `quiniela-wc2026`
   - Visibility: **Private**
   - Hacé clic en **Create repository**

3. En tu computadora, instalá Git si no lo tenés: https://git-scm.com
4. Abrí una terminal en la carpeta `quiniela` y ejecutá:

```bash
git init
git add .
git commit -m "Quiniela WC2026"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/quiniela-wc2026.git
git push -u origin main
```

---

## PASO 3 — Publicar en Vercel (5 min)

1. Entrá a https://vercel.com y hacé clic en **"Start Deploying"**
2. Iniciá sesión con Google
3. Hacé clic en **"Add New Project"** → **"Import Git Repository"**
4. Conectá tu cuenta de GitHub y seleccioná `quiniela-wc2026`
5. Antes de hacer deploy, andá a **Environment Variables** y agregá:
   - `REACT_APP_SUPABASE_URL` = la URL que copiaste en el Paso 1
   - `REACT_APP_SUPABASE_ANON_KEY` = la anon key que copiaste en el Paso 1
6. Hacé clic en **Deploy**
7. En ~2 minutos, Vercel te da un link como `quiniela-wc2026.vercel.app`

---

## PASO 4 — Configurar tu cuenta de Admin (2 min)

1. Entrá al link de tu app y **registrate** con tu correo
2. Volvé a Supabase → **Table Editor** → tabla `profiles`
3. Buscá tu fila (por tu email en auth.users o por nombre)
4. Cambiá el campo `is_admin` de `false` a `true`
5. Guardá — ahora cuando ingreses a la app vas a ver el botón **Admin**

---

## ✅ ¡Listo! Compartí el link

Mandá el link por WhatsApp a los 20 participantes. Cada quien:
1. Entra al link
2. Se registra con su nombre + correo + contraseña
3. Llena sus predicciones
4. Los pronósticos se **bloquean automáticamente** al inicio de cada partido

---

## 🃏 Sistema de Puntos

| Categoría | Puntos |
|-----------|--------|
| Resultado exacto — Grupos | +3 |
| Ganador correcto — Grupos | +1 |
| Resultado exacto — Eliminatorias | +4 |
| Ganador correcto — Eliminatorias | +2 |
| Campeón del mundo | +5 |
| Goleador del torneo | +4 |
| Comodín ×2 (1 por jornada) | ×2 |

---

## ❓ Preguntas frecuentes

**¿Puedo cambiar el nombre de mi app?**
Sí, en Vercel → tu proyecto → Settings → Domains podés agregar un dominio personalizado gratis.

**¿Qué pasa si alguien olvida su contraseña?**
Supabase envía un email de reset automáticamente (función "Forgot password" — podés agregar ese botón al AuthScreen si querés).

**¿Los datos son seguros?**
Sí. Cada usuario solo puede editar sus propias predicciones. Solo el admin puede ingresar resultados reales.
