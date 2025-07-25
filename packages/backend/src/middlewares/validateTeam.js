export function validateTeam(req, res, next) {
  const { nameteam, password } = req.body;

  if (!nameteam || typeof nameteam !== 'string' || nameteam.trim().length < 4) {
    return res.status(400).json({ error: "Le nom de l'équipe est requis (minimum 4 caractères)" });
  }

  if (!password || typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ error: "Le mot de passe est requis (min. 6 caractères)" });
  }

  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Un email valide est requis" });
  }

  next();
}