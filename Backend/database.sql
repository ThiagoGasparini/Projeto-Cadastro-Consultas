DROP DATABASE IF EXISTS desafio_tecnico;

CREATE DATABASE IF NOT EXISTS desafio_tecnico;

CREATE TABLE desafio_tecnico.specialty(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(45) NOT NULL
  ) engine = InnoDB;

CREATE TABLE desafio_tecnico.doctor(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(45) NOT NULL,
      specialty VARCHAR(100) NOT NULL,
      crm VARCHAR(45) NOT NULL
  ) engine = InnoDB;

CREATE TABLE desafio_tecnico.patient(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(45) NOT NULL,
      cpf VARCHAR(45) NOT NULL,
      phone VARCHAR(45) NOT NULL,
      email VARCHAR(45) NOT NULL,
      cep VARCHAR(45) NOT NULL,
      address VARCHAR(45) NOT NULL,
      number VARCHAR(45) NOT NULL,
  ) engine = InnoDB;

  CREATE TABLE desafio_tecnico.appointment(
      id INT PRIMARY KEY AUTO_INCREMENT,
      patient VARCHAR(45) NOT NULL,
      doctor VARCHAR(45) NOT NULL,
      appointmentDate DATETIME NOT NULL
  ) engine = InnoDB;
