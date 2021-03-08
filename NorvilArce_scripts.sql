USE master
GO

CREATE DATABASE NorvilArce
GO

USE NorvilArce
GO

CREATE TABLE PERSONAL (
IdPersonal INT IDENTITY(1,1) PRIMARY KEY,
ApPaterno VARCHAR(20),
ApMaterno VARCHAR(20),
Nombre1 VARCHAR(20),
Nombre2 VARCHAR(20),
NombreCompleto VARCHAR(83),
FchNac DATE,
Fchingreso DATE)
GO

CREATE TABLE HIJOS (
IdDerhab INT IDENTITY(1,1) PRIMARY KEY,
IdPersonal INT,
ApPaterno VARCHAR(20),
ApMaterno VARCHAR(20),
Nombre1 VARCHAR(20),
Nombre2 VARCHAR(20),
NombreCompleto VARCHAR(83),
FchNac DATE)
GO

ALTER TABLE HIJOS ADD CONSTRAINT FKHijo_Personal
FOREIGN KEY (IDPERSONAL) REFERENCES PERSON
GO

-- STORED PROCEDURE

-- PERSONAL

-- CREATE

CREATE PROCEDURE usp_CrearTrabajador

@vape_pat VARCHAR(20),
@vape_mat VARCHAR(20),
@vnom1 VARCHAR(20),
@vnom2 VARCHAR(20),
@vfec_nac DATE,
@vfec_ing DATE

AS

INSERT INTO PERSONAL(ApPaterno, ApMaterno, Nombre1, Nombre2, NombreCompleto, FchNac, Fchingreso)
VALUES(@vape_pat, @vape_mat, @vnom1, @vnom2, (@vape_pat + ' ' + @vape_mat + ' ' + @vnom1 + ' ' + @vnom2),
@vfec_nac, @vfec_ing)
GO

-- READ

CREATE PROCEDURE usp_listarTrabajadores
AS
SELECT * FROM PERSONAL
GO

-- UPDATE

CREATE PROCEDURE usp_ActualizarTrabajador

@vape_pat VARCHAR(20),
@vape_mat VARCHAR(20),
@vnom1 VARCHAR(20),
@vnom2 VARCHAR(20),
@vfec_nac DATE,
@vfec_ing DATE,
@vid_personal INT

AS

UPDATE PERSONAL 
SET ApPaterno=@vape_pat, ApMaterno=@vape_mat, Nombre1=@vnom1, Nombre2=@vnom2,
NombreCompleto=(@vape_pat + ' ' + @vape_mat + ' ' + @vnom1 + ' ' + @vnom2),
FchNac=@vfec_nac, Fchingreso=@vfec_ing
WHERE IdPersonal=@vid_personal
GO

-- DELETE

CREATE PROCEDURE usp_EliminarTrabajador
@vid_personal INT
AS
DELETE FROM PERSONAL WHERE IdPersonal=@vid_personal
GO

-- HIJOS

-- CREATE

CREATE PROCEDURE usp_CrearHijo

@vid_personal INT,
@vape_pat VARCHAR(20),
@vape_mat VARCHAR(20),
@vnom1 VARCHAR(20),
@vnom2 VARCHAR(20),
@vfec_nac DATE

AS

INSERT INTO HIJOS (IdPersonal, ApPaterno, ApMaterno, Nombre1, Nombre2, NombreCompleto, FchNac)
VALUES(@vid_personal, @vape_pat, @vape_mat, @vnom1, @vnom2, (@vape_pat + ' ' + @vape_mat + ' ' + @vnom1 + ' ' + @vnom2),
@vfec_nac)
GO

-- READ

CREATE PROCEDURE usp_listarHijos
AS
SELECT * FROM HIJOS
GO

-- UPDATE

CREATE PROCEDURE usp_ActualizarHijos

@vid_personal INT,
@vape_pat VARCHAR(20),
@vape_mat VARCHAR(20),
@vnom1 VARCHAR(20),
@vnom2 VARCHAR(20),
@vfec_nac DATE,
@vid_derhab INT

AS

UPDATE HIJOS 
SET IdPersonal=@vid_personal, ApPaterno=@vape_pat, ApMaterno=@vape_mat, Nombre1=@vnom1, Nombre2=@vnom2,
NombreCompleto=(@vape_pat + ' ' + @vape_mat + ' ' + @vnom1 + ' ' + @vnom2),
FchNac=@vfec_nac
WHERE IdDerhab=@vid_derhab
GO

-- DELETE

CREATE PROCEDURE usp_EliminarHijo
@vid_derhab INT
AS
DELETE FROM HIJOS WHERE IdDerhab=@vid_derhab
GO

-- HIJOS POR PERSONAL

CREATE PROCEDURE usp_listarHijosPorPersonal
@vid_personal INT
AS
SELECT * FROM HIJOS
WHERE IdPersonal=@vid_personal
GO






