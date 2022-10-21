BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Informações Pessoais" (
	"Sua foto"	TEXT,
	"Nome completo"	TEXT,
	"Telefone"	TEXT,
	"Cargo"	TEXT,
	"Habilidades"	TEXT,
	"Personalidades"	TEXT
);
CREATE TABLE IF NOT EXISTS "Formação" (
	"Curso"	INTEGER
);
CREATE TABLE IF NOT EXISTS "Experiência" (
	"Nome da Empresa"	TEXT
);
CREATE TABLE IF NOT EXISTS "Realizações" (
	"Atividades em destaque"	TEXT
);
COMMIT;
