import { useState } from 'react'
import sesionesImage from '../assets/secciones/servicios_sesiones_cientificas.png'
import cursoImage from '../assets/cursos/2026_Curso_Neumo.jpg'
import programa2025Url from '../assets/sesiones_cientificas/programas/programa_2025.pdf?url'
import programa2023Url from '../assets/sesiones_cientificas/programas/programa_2023.pdf?url'
import programa2022Url from '../assets/sesiones_cientificas/programas/programa_2022.pdf?url'
import flyer2025Url from '../assets/sesiones_cientificas/flyers/flyer_2025.png'
import flyer2024Url from '../assets/sesiones_cientificas/flyers/flyer_2024.png'
import flyer2023Url from '../assets/sesiones_cientificas/flyers/flyer_2023.png'
import flyer2022Url from '../assets/sesiones_cientificas/flyers/flyer_2022.png'

// Array de sesiones científicas
// Datos extraídos de https://neumo-argentina.org/sesiones_cientificas.php
// La página contiene ciclos de sesiones organizados por año (2025, 2024, 2023, etc.)
const sesiones = [
  // 2020 - Curso Teórico Práctico de Neumonología
  {
    id: 20200430,
    title: 'ECOGRAFIA DEL TORAX',
    speaker: 'Dr. John T. Sanchez, Cardiólogo. Intensivista Hospital Dr. T. Alvarez',
    date: '30',
    month: 'Abril',
    year: '2020',
    time: '17:00',
    modality: 'Presencial',
    description: '16.30 a 17 hs: PRESENTACION. INDUCCION\n17 a 20 hs: ECOGRAFIA DEL TORAX\n20 a 20.30 hs: ACTUALIZACION',
    topics: ['ECOGRAFIA DEL TORAX'],
  },
  {
    id: 20200528,
    title: 'FIBROSIS PULMONAR IDIOPATICA - ENFERMEDADES OBSTRUCTIVAS DEL PULMON. ASMA',
    speaker: 'Prof. Dra. Cristina De Salvo / Dr. Ricardo del Olmo',
    date: '28',
    month: 'Mayo',
    year: '2020',
    time: '17:00',
    modality: 'Presencial',
    description: '16.30 a 17hs: SESION CIENTIFICA SAN\n17 a 18 hs: FIBROSIS PULMONAR IDIOPATICA\n18 a 20 hs: ENFERMEDADES OBSTRUCTIVAS DEL PULMON. ASMA\n20 a 20.30 hs: ACTUALIZACION',
    topics: ['FIBROSIS PULMONAR IDIOPATICA', 'ASMA'],
  },
  {
    id: 20200625,
    title: 'MANEJO DEL SAHOS EN LA PRACTICA CLINICA - ENFERMEDAD PULMONAR INTERSTICIAL DIFUSA',
    speaker: 'Dr. Alberto Levi / Dr. Mariano E. Mazzei',
    date: '25',
    month: 'Junio',
    year: '2020',
    time: '16:30',
    modality: 'Presencial',
    description: '16.30 a 18 hs: MANEJO DEL SAHOS EN LA PRACTICA CLINICA\n18 a 20 hs: ENFERMEDAD PULMONAR INTERSTICIAL DIFUSA\n20 a 20.30 hs: ACTUALIZACION',
    topics: ['SAHOS', 'ENFERMEDAD PULMONAR INTERSTICIAL'],
  },
  {
    id: 20200827,
    title: 'ENF. RESPIRATORIA ASOCIADA AL TRABAJO - ENFERMEDADES OBSTRUCTIVAS DEL PULMON. EPOC',
    speaker: 'Dr. Abel E. Bordón / Dr. Ricardo del Olmo',
    date: '27',
    month: 'Agosto',
    year: '2020',
    time: '17:00',
    modality: 'Presencial',
    description: '16.30 a 17 hs: SESION CIENTIFICA SAN\n17 a 18 hs: ENF. RESPIRATORIA ASOCIADA AL TRABAJO\n18 a 20 hs: ENFERMEDADES OBSTRUCTIVAS DEL PULMON. EPOC\n20 a 20.30 hs: ACTUALIZACION',
    topics: ['ENFERMEDAD RESPIRATORIA OCUPACIONAL', 'EPOC'],
  },
  {
    id: 20200924,
    title: 'VACUNACION ANTIGRIPAL Y ANTINEUMOCOCICA',
    speaker: 'Dr. Alberto Levi',
    date: '24',
    month: 'Septiembre',
    year: '2020',
    time: '16:30',
    modality: 'Presencial',
    description: '16.30 a 17.45: VACUNACION ANTIGRIPAL Y ANTINEUMOCOCICA',
    topics: ['VACUNACION'],
  },
  {
    id: 20201029,
    title: 'TUBERCULOSIS - TUBERCULOSIS MULTIDROGORRESISTENTE',
    speaker: 'Dr. Carlos Mario Boccia / Prof. Dr. Domingo Palmero',
    date: '29',
    month: 'Octubre',
    year: '2020',
    time: '17:00',
    modality: 'Presencial',
    description: '16.30 a 17 hs: SESION CIENTIFICA SAN\n17 a 18hs: TUBERCULOSIS DISCUSION DE CASOS\n18 a 20.00hs: TUBERCULOSIS MULTIDROGORRESISTENTE\n20 a 20.30 hs: ACTUALIZACION',
    topics: ['TUBERCULOSIS'],
  },
  {
    id: 20201126,
    title: 'IMAGENES DEL TORAX - NEUMONIA AGUDA DE LA COMUNIDAD - NEUMONIA INTRAHOSPITALARIA',
    speaker: 'Dr. Juan M. Wainstein / Dr. Emiliano Darío Bastidas Zubiaga / Dr. Miguel B. Zappia',
    date: '26',
    month: 'Noviembre',
    year: '2020',
    time: '16:30',
    modality: 'Presencial',
    description: '16.30 a 18.30hs: IMAGENES DEL TORAX\n18.30 a 19.15hs: NEUMONIA AGUDA DE LA COMUNIDAD\n19.15 a 20 hs: NEUMONIA INTRAHOSPITALARIA',
    topics: ['IMAGENES DEL TORAX', 'NEUMONIA'],
  },
  
  // 2019 - Curso Teórico Práctico de Neumonología
  {
    id: 20190425,
    title: 'INSUFICIENCIA RESPIRATORIA AGUDA – INJURIA PULMONAR (MÓDULO I)',
    speaker: 'Dr. Juan Carlos Cisneros / Dra. Liliana Castro Zorrilla',
    date: '25',
    month: 'Abril',
    year: '2019',
    modality: 'Presencial',
    description: 'INSUFICIENCIA RESPIRATORIA AGUDA – INJURIA PULMONAR\nDr. Juan Carlos Cisneros. UTI Hospital Muñiz\nLOS MECANISMOS DE DEFENSA DEL PULMÓN\nDra. Liliana Castro Zorrilla. Inmunóloga Instituto Vaccareza.',
    topics: ['INSUFICIENCIA RESPIRATORIA AGUDA', 'INMUNOLOGIA RESPIRATORIA'],
  },
  {
    id: 20190530,
    title: 'ECOGRAFÍA TORACOPULMONAR (MÓDULO II)',
    speaker: 'Dr. John T. Sanchez',
    date: '30',
    month: 'Mayo',
    year: '2019',
    modality: 'Presencial',
    description: 'ECOGRAFÍA TORACOPULMONAR (17 a 20 hs.)\nDr. John T. Sanchez, Cardiólogo. Intensivista Hospital T. Alvarez',
    topics: ['ECOGRAFÍA'],
  },
  {
    id: 20190627,
    title: 'ENFERMEDADES OBSTRUCTIVAS DEL PULMON. ASMA EPOC (MÓDULO III)',
    speaker: 'Dr. Ricardo del Olmo',
    date: '27',
    month: 'Junio',
    year: '2019',
    modality: 'Presencial',
    description: 'ENFERMEDADES OBSTRUCTUVAS DEL PULMON. ASMA EPOC (17 A 20 Hs.)\nDr. Ricardo del Olmo. Neumonólogo. Laboratorio Pulmonar Hospital María Ferrer',
    topics: ['ASMA', 'EPOC'],
  },
  {
    id: 20190829,
    title: 'IMÁGENES DEL PULMÓN - ENFERMEDADES RESPIRATORIAS OCUPACIONALES (MÓDULO IV)',
    speaker: 'Dr. Juan M. Wainstein / Dr. Omar Aidar',
    date: '29',
    month: 'Agosto',
    year: '2019',
    modality: 'Presencial',
    description: 'IMÁGENES DEL PULMÓN (16.45 a 18.30hs.)\nDr. Juan M. Wainstein. Especialista en Diagnóstico por Imágenes. Htal. Santojanni.\nENFERMEDADES RESPIRATORIAS OCUPACIONALES\nDr. Omar Aidar. Neumonólogo. Htal Muñiz (19 a 20.00 hs.)',
    topics: ['IMAGENES DEL PULMON', 'ENFERMEDAD RESPIRATORIA OCUPACIONAL'],
  },
  {
    id: 20190926,
    title: 'NODULO PULMONAR SOLITARIO - TRASPLANTE PULMONAR (MÓDULO V)',
    speaker: 'Dr. Jorge L. Nazar / Dr. Gustavo Parrilla',
    date: '26',
    month: 'Septiembre',
    year: '2019',
    modality: 'Presencial',
    description: 'HOMENAJE DR. CETRANGOLO (16.45 a 17 hs.)\nNODULO PULMONAR SOLITARIO (17 a 18.15 hs.)\nDr. Jorge L. Nazar. Cirujano de Tórax. CEMIC. Ex Presidente SACT.\nTRASPLANTE PULMONAR (18.30 a 20 hs.)\nDr. Gustavo Parrilla. Cirugía torácica y Trasplante Pulmonar. Fundación Favaloro.',
    topics: ['NODULO PULMONAR SOLITARIO', 'TRASPLANTE PULMONAR'],
  },
  {
    id: 20191031,
    title: 'TUBERCULOSIS MULTIDROGORRESISTENTE - ENFERMEDAD PULMONAR INTERSTICIAL DIFUSA (MODULO VI)',
    speaker: 'Prof. Dr. Domingo Palmero / Dr. Mariano E. Mazzei',
    date: '31',
    month: 'Octubre',
    year: '2019',
    modality: 'Presencial',
    description: 'TUBERCULOSIS MULSTIDROGORRESISTENTE (17 a 18.30 hs.)\nProf. Dr. Domingo Palmero. Jefe División Neumotisiología Hospital Muñiz. Profesor titular Carrera de médicos especialistas en Neumonología. UBA.\nENFERMEDAD PULMONAR INTERSTICIAL DIFUSA (18.30 a 20 hs.)\nDr. Mariano E. Mazzei. Internista. Neumonólogo. Hospital de Clínicas José de San Martín.',
    topics: ['TUBERCULOSIS', 'ENFERMEDAD PULMONAR INTERSTICIAL'],
  },
  {
    id: 20191128,
    title: 'NEUMONÍA AGUDA DE LA COMUNIDAD - NEUMONIA INTRAHOSPITALARIA (MODULO VII)',
    speaker: 'Dr. Alberto Levi / Dr. Abel E Bordón',
    date: '28',
    month: 'Noviembre',
    year: '2019',
    modality: 'Presencial',
    description: 'NEUMONÍA AGUDA DE LA COMUNIDAD (16.30 a 17.30 hs.)\nDr. Alberto Levi. Neumonólogo. Hospital Muñiz\nNEUMONIA INTRAHOSPITALARIA (17.45 a 18.45 hs)\nDr. Abel E Bordón. Neumonólogo. Intensivista. Hospital T. Alvarez.',
    topics: ['NEUMONIA'],
  },
  
  // 2018 - Curso Teórico Práctico de Neumonología
  {
    id: 20180426,
    title: 'EVALUACION DE LA VIA AEREA EN LA URGENCIA - VENTILACION NO INVASIVA (MODULO I)',
    speaker: 'Dr. Guillermo Chiappero / Dr. Carlos Mario Boccia',
    date: '26',
    month: 'Abril',
    year: '2018',
    modality: 'Presencial',
    description: 'Presentacion del curso: 16.30 hs.\nEVALUACION DE LA VIA AEREA EN LA URGENCIA (17 a 18.00 hs)\nVENTILACION NO INVASIVA (VNI) (18.00 a 20 hs)\nDr. Guillermo Chiappero. Neumonologo, Intensivista. Hospital J. A. Fernandez.\nAPRENDIENDO CON CASOS (20 a 20.30 hs)\nDr. Carlos Mario Boccia. Presidente de Honor de la Sociedad Argentina de Neumonologia.',
    topics: ['VIA AEREA', 'VENTILACION NO INVASIVA'],
  },
  {
    id: 20180531,
    title: 'ECOGRAFIA TORACOPULMONAR (MODULO II)',
    speaker: 'Dr. John T. Sanchez',
    date: '31',
    month: 'Mayo',
    year: '2018',
    modality: 'Presencial',
    description: 'Aprendiendo con casos (16.30 a 17 hs)\nECOGRAFIA TORACOPULMONAR (17 a 20 hs)\nDr. John T. Sanchez. Cardiólogo, Intensivista. Hospital T. Alvarez.\nAprendiendo con casos (20.15 a 20.30 hs)',
    topics: ['ECOGRAFIA'],
  },
  {
    id: 20180628,
    title: 'IMAGENES DEL PULMON (MODULO III)',
    speaker: 'Dr. Juan M. Wainstein',
    date: '28',
    month: 'Junio',
    year: '2018',
    modality: 'Presencial',
    description: 'Aprendiendo con casos (16.30 a 17 hs)\nIMAGENES DEL PULMON (17:00 a 20:30 hs)\nDr. Juan M. Wainstein. Especialista en Diagnóstico por Imágenes. Hospital D. F. Santojanni.',
    topics: ['IMAGENES DEL PULMON'],
  },
  {
    id: 20180830,
    title: 'ENFERMEDADES OBSTRUCTIVAS DEL PULMON - ENFERMEDADES RESPIRATORIAS OCUPACIONALES (MODULO IV)',
    speaker: 'Dr. Ricardo del Olmo / Dr. Omar Aidar',
    date: '30',
    month: 'Agosto',
    year: '2018',
    modality: 'Presencial',
    description: 'Aprendiendo con casos (16.30 a 17 hs)\nENFERMEDADES OBSTRUCTIVAS DEL PULMON (17 a 20 hs)\nASMA. EPOC\nDr. Ricardo del Olmo. Neumonologo. Laboratorio Pulmonar Hospital María Ferrer.\nENFERMEDADES RESPIRATORIAS OCUPACIONALES. (20 a 20.30 hs)\nDr. Omar Aidar. Neumonologo Jefe de Sala 19 Hospital Muñiz. Presidente de la SAN.',
    topics: ['ASMA', 'EPOC', 'ENFERMEDAD RESPIRATORIA OCUPACIONAL'],
  },
  {
    id: 20180927,
    title: 'NODULO PULMONAR SOLITARIO - TRASPLANTE PULMONAR (MODULO V)',
    speaker: 'Dr. Juan Manuel Campana / Dr. Ricardo Bracco / Dr. Jorge L. Nazar / Dr. Gustavo Parrilla',
    date: '27',
    month: 'Septiembre',
    year: '2018',
    modality: 'Presencial',
    description: 'HOMENAJE DR. ANTONIO CETRANGOLO (16:30 a 17:30 hs)\nDr. Juan Manuel Campana / Dr. Ricardo Bracco.\nNODULO PULMONAR SOLITARIO (17:30 a 18:30 hs)\nDr. Jorge L. Nazar. Cirujano de Tórax. CEMIC. Ex Presidente SACT.\nTRASPLANTE PULMONAR (18:30 a 20:00 hs)\nDr. Gustavo Parrilla. Cirugía Torácica y Trasplante Pulmonar. Fundación Favaloro.',
    topics: ['NODULO PULMONAR SOLITARIO', 'TRASPLANTE PULMONAR'],
  },
  {
    id: 20181025,
    title: 'TUBERCULOSIS MULTIDROGORRESISTENTE - ENFERMEDAD PULMONAR INTERSTICIAL DIFUSA (MODULO VI)',
    speaker: 'Prof. Dr. Domingo Palmero / Dr. Mariano E. Mazzei',
    date: '25',
    month: 'Octubre',
    year: '2018',
    modality: 'Presencial',
    description: 'Aprendiendo con casos (16.30 a 17 hs)\nTUBERCULOSIS MULTIDROGORRESISTENTE (17 a 18:30 hs)\nProf. Dr. Domingo Palmero. Jefe División Neumotisiologia Hospital Muñiz. Profesor Titular Carrera de Médicos Especialistas en Neumonología UBA.\nAprendiendo con casos (18.30 a 19 hs)\nENFERMEDAD PULMONAR INTERSTICIAL DIFUSA (19 a 20:30 hs)\nDr. Mariano E. Mazzei. Internista, Neumonologo. Hospital de Clinicas Jose de San Martin.',
    topics: ['TUBERCULOSIS', 'ENFERMEDAD PULMONAR INTERSTICIAL'],
  },
  {
    id: 20181129,
    title: 'NEUMONIA AGUDA DE LA COMUNIDAD - NEUMONIA INTRAHOSPITALARIA (MODULO VII)',
    speaker: 'Dr. Alberto Levi / Dr. Abel E. Bordón',
    date: '29',
    month: 'Noviembre',
    year: '2018',
    modality: 'Presencial',
    description: 'NEUMONIA AGUDA DE LA COMUNIDAD (16:30 a 17:30 hs)\nDr. Alberto Levi. Neumonologo. Hospital Muñiz. Secretario de Actas SAN.\nNEUMONIA INTRAHOSPITALARIA (17:45 a 18:45 hs)\nDr. Abel E. Bordón. Neumonologo, Intensivista. Hospital T. Alvarez. Secretario SAN.',
    topics: ['NEUMONIA'],
  },
  
  // 2017
  {
    id: 20170427,
    title: 'TUBERCULOSIS - TRATAMIENTOS BIOLOGICOS Y TUBERCULOSIS (MODULO I)',
    speaker: 'Prof. Dr. Domingo Palmero / Dr. Carlos Mario Boccia',
    date: '27',
    month: 'Abril',
    year: '2017',
    modality: 'Presencial',
    description: 'TUBERCULOSIS\nProf. Dr. Domingo Palmero. Jefe División Neumotisiologia Hospital Muñiz. Profesor Titular Carrera de Médicos Especialistas en Neumonología UBA.\nTRATAMIENTOS BIOLOGICOS Y TUBERCULOSIS\nDr. Carlos Mario Boccia. Neumonólogo. Hospital Muñiz. Presidente SAN.',
    topics: ['TUBERCULOSIS'],
  },
  {
    id: 20170518,
    title: 'ENDOSCOPIA RESPIRATORIA - ECOGRAFIA PULMONAR (MODULO II)',
    speaker: 'Dr. Mariano E. Díaz / Dr. John T. Sanchez',
    date: '18',
    month: 'Mayo',
    year: '2017',
    modality: 'Presencial',
    description: 'ENDOSCOPIA RESPIRATORIA\nDr. Mariano E. Díaz. Neumonólogo. Endoscopía Intervencionista. Hospital Alemán. Taller sobre casos.\nECOGRAFIA PULMONAR\nDr. John T. Sanchez. Cardiólogo, Intensivista. Subjefe Terapia Intensiva. Sanatorio Guemes.\nPrácticas externas.',
    topics: ['ENDOSCOPIA', 'ECOGRAFIA'],
  },
  {
    id: 20170629,
    title: 'ENF. OBSTRUCTIVAS I. ESPIROMETRIA - INMUNOLOGIA RESPIRATORIA (MODULO III)',
    speaker: 'Dr. Ricardo del Olmo / Dr. Ruben Paz',
    date: '29',
    month: 'Junio',
    year: '2017',
    modality: 'Presencial',
    description: 'ENF. OBSTRUCTIVAS I. ESPIROMETRIA\nDr. Ricardo del Olmo. Neumonólogo. Laboratorio Pulmonar Hospital María Ferrer.\nPrácticas externas.\nINMUNOLOGIA RESPIRATORIA\nDr. Ruben Paz. Pediatra, Alergólogo-Inmunólogo. Hospital de Niños Dr. Ricardo Gutierrez.',
    topics: ['EPOC', 'ASMA', 'INMUNOLOGIA RESPIRATORIA'],
  },
  {
    id: 20170831,
    title: 'Sesión Científica (MODULO IV)',
    date: '31',
    month: 'Agosto',
    year: '2017',
    modality: 'Presencial',
    description: 'Ciclo de sesiones científicas del año 2017.',
  },
  {
    id: 20170928,
    title: 'Sesión Científica (MODULO V)',
    date: '28',
    month: 'Septiembre',
    year: '2017',
    modality: 'Presencial',
    description: 'Ciclo de sesiones científicas del año 2017.',
  },
  {
    id: 20171026,
    title: 'Sesión Científica (MODULO VI)',
    date: '26',
    month: 'Octubre',
    year: '2017',
    modality: 'Presencial',
    description: 'Ciclo de sesiones científicas del año 2017.',
  },
  {
    id: 20171130,
    title: 'Sesión Científica (MODULO VII)',
    date: '30',
    month: 'Noviembre',
    year: '2017',
    modality: 'Presencial',
    description: 'Ciclo de sesiones científicas del año 2017.',
  },
  
  // 2014
  {
    id: 20140522,
    title: 'Actualización en Fibrosis Pulmonar Idiopática - Tumores del Mediastino',
    speaker: 'Dr. Carlos Mosca / Dr. Marcelo O. Guerra / Dr. Claudio Gutiérrez Occhiuzzi',
    date: '22',
    month: 'Mayo',
    year: '2014',
    time: '19:00',
    modality: 'Presencial',
    description: '19:00 hs: Actualización en Fibrosis Pulmonar Idiopática\nDr. Carlos Mosca\n\n19:40 hs: Tumores del Mediastino\nDr. Marcelo O. Guerra\nPresentación de casos a discusión\nDr. Claudio Gutiérrez Occhiuzzi',
    topics: ['Fibrosis Pulmonar', 'Tumores del Mediastino'],
  },
  {
    id: 20140626,
    title: 'Presentación de casos clínicos a discusión',
    speaker: 'Dr. Abel Bordón / Dr. Carlos Mario Boccia',
    date: '26',
    month: 'Junio',
    year: '2014',
    time: '19:00',
    modality: 'Presencial',
    description: '19:00 hs - AMA\nPresentación de casos clínicos a discusión\nDr. Abel Bordón\nDr. Carlos Mario Boccia',
    topics: ['Casos clínicos'],
  },
  
  // 2013 - Ciclo de Sesiones Científicas
  {
    id: 20130425,
    title: 'Transplante Pulmonar - Actualización en Enfermedad Neumocóccica',
    speaker: 'Prof.Dr. Elías Hurtado Hoyo / Dr. Jorge Osvaldo Cáneva / Dr. Carlos Codinardo',
    date: '25',
    month: 'Abril',
    year: '2013',
    time: '18:45',
    modality: 'Presencial',
    description: '18:45 hs: Palabras de apertura del Presidente de la AMA: Prof.Dr. ELÍAS HURTADO HOYO\n\n19:00 hs: Conferencia: "Transplante Pulmonar"\nDr. JORGE OSVALDO CÁNEVA\n\n19:45 hs: Actualización en Enfermedad Neumocóccica en adultos y Nuevas Vacunas\nDr. CARLOS CODINARDO\n\n20:15 hs: Lunch inaugural',
    topics: ['Trasplante Pulmonar', 'Vacunación'],
  },
  {
    id: 20130523,
    title: 'Cirugía Actual de la Tuberculosis: dudas y certezas',
    speaker: 'Dr. Marcelo Guerra / Dr. Gustavo Bondulich',
    date: '23',
    month: 'Mayo',
    year: '2013',
    time: '19:00',
    modality: 'Presencial',
    description: '19:00hs: Entrega de certificados de recertificación\n\n19:15 hs: "Cirugía Actual de la Tuberculosis: dudas y certezas"\nDres. MARCELO GUERRA y GUSTAVO BONDULICH\n\n19:45 hs: Discusión de caso clínico-quirúrgico',
    topics: ['Tuberculosis'],
  },
  {
    id: 20130627,
    title: 'Mesa Redonda: Conducta frente al tuberculoma - Criobiopsia Endoscópica',
    speaker: 'Prof.Dr. Eduardo Abbate / Prof.Dra. María Cristina De Salvo / Prof.Dr. Domingo Palmero / Dr. Carlos Mario Boccia / Dr. Ricardo Isidoro',
    date: '27',
    month: 'Junio',
    year: '2013',
    time: '19:00',
    modality: 'Presencial',
    description: '19:00 hs: Mesa Redonda: "Conducta frente al tuberculoma: está todo dicho?"\nPanelistas: Prof.Dr. EDUARDO ABBATE, Prof.Dra. MARIA CRISTINA DE SALVO, Prof.Dr. DOMINGO PALMERO\nCoordinador: Dr. CARLOS MARIO BOCCIA\n\n19:45 hs: Criobiopsia Endoscópica\nDr. RICARDO ISIDORO',
    topics: ['Tuberculosis'],
  },
  {
    id: 20130725,
    title: 'EPOC: Nuevos tratamientos',
    speaker: 'Prof.Dra. María Cristina De Salvo / Dr. Carlos Mario Boccia',
    date: '25',
    month: 'Julio',
    year: '2013',
    time: '19:00',
    modality: 'Presencial',
    description: '19:00 hs: Conferencia: "EPOC: Nuevos tratamientos"\nPROF.Dra. MARIA CRISTINA DE SALVO\n\n19:45 hs: Presentación de caso clínico a discusión\nDr. CARLOS MARIO BOCCIA',
    topics: ['EPOC'],
  },
  {
    id: 20130822,
    title: 'Punción biopsia torácica dirigida por TAC',
    speaker: 'Dr. Juan Marcos Wainstein',
    date: '22',
    month: 'Agosto',
    year: '2013',
    time: '19:00',
    modality: 'Presencial',
    description: '19:00 hs: Conferencia: "Punción biopsia torácica dirigida por TAC"\nDr. JUAN MARCOS WAINSTEIN\n\n19:45 hs: Presentación de Casos Clínico/radiológicos a discusión',
    topics: ['Biopsia'],
  },
  {
    id: 20130926,
    title: 'Homenaje al Prof.Dr.Antonio Cetrángolo - Nuevos criterios para la estadificación del Cáncer de pulmón',
    speaker: 'Prof.Dr. Juan Manuel Campana / Dr. Mario Branda',
    date: '26',
    month: 'Septiembre',
    year: '2013',
    time: '19:00',
    modality: 'Presencial',
    description: '19:00 hs: Homenaje al Prof.Dr.Antonio Cetrángolo\nProf.Dr. JUAN MANUEL CAMPANA\n\n19:20 hs: Conferencia: "Nuevos criterios para la estadificación y tratamiento del Cáncer de pulmón"\nDr. MARIO BRANDA\n\n20:00 hs: Presentación de caso clínico a discusión',
    topics: ['Cáncer de pulmón'],
  },
  {
    id: 20131024,
    title: 'Mesa redonda: Nódulo Pulmonar Solitario',
    speaker: 'Prof. Jose San Roman / Dr. Gustavo Lyons / Dr. Carlos Mario Boccia / Dr. Jorge Reilly',
    date: '24',
    month: 'Octubre',
    year: '2013',
    time: '19:00',
    modality: 'Presencial',
    description: '19:00 hs: Mesa redonda: "Nódulo Pulmonar Solitario"\nPanelistas: Prof. JOSE SAN ROMAN, Dr. GUSTAVO LYONS, Dr. CARLOS MARIO BOCCIA\nCoordinador: Dr. JORGE REILLY\n\n19:45 hs: Discusión',
    topics: ['Nódulo Pulmonar Solitario'],
  },
  {
    id: 20131128,
    title: 'Tecnología móvil para el abordaje del tabaco - Bronquiectasias - Tratamiento inhalado - Mesa Redonda: NPS',
    speaker: 'Lic. Juan Cruz Gorreri / Prof. María Cristina De Salvo / Dra. María Inés Medín / Prof. Dr. José San Román / Dr. Gustavo Lyons / Dr. Carlos Mario Boccia / Dr. Jorge Reilly',
    date: '28',
    month: 'Noviembre',
    year: '2013',
    time: '18:00',
    modality: 'Presencial',
    description: '18:00 hs: Tecnología móvil para el abordaje del tabaco.\nLic. Juan Cruz Gorreri\n\n18:30 hs: Bronquiectasias.\nProf. María Cristina De Salvo\n\n19:00 hs: Tratamiento inhalado de las bronquiectasias.\nDra. María Inés Medín\n\n19:20 hs: Mesa Redonda: NPS.\nPanelistas: Prof. Dr. José San Román, Dr. Gustavo Lyons, Dr. Carlos Mario Boccia.\nCoordinador: Dr. Jorge Reilly\n\n20:00 hs: Lunch de cierre',
    topics: ['Bronquiectasias', 'Nódulo Pulmonar Solitario'],
  },
  
  // 2012
  {
    id: 20120524,
    title: 'Presentación de la página web de la SAN - NPS - La biología molecular en el diagnóstico de la TBC',
    speaker: 'Prof. Dra. María Cristina De Salvo / Dr. Carlos Mario Boccia / Dr. Gustavo Parrilla / Dra. Marisa Gutiérrez',
    date: '24',
    month: 'Mayo',
    year: '2012',
    time: '19:00',
    modality: 'Presencial',
    description: 'Palabras de la Prof. Dra. María Cristina De Salvo\nPresentación de la página web de la SAN - Dr. Carlos Mario Boccia\nPresentación y discusión de caso: "NPS" - Dr. Gustavo Parrilla\nActualización: "La biología molecular en el diagnóstico de la TBC" - Dra. Marisa Gutiérrez.\nLunch',
    topics: ['Nódulo Pulmonar Solitario', 'Tuberculosis'],
  },
  {
    id: 20120628,
    title: 'Diagnóstico y tratamiento del Mesotelioma',
    speaker: 'Prof.Dr. Carlos Horacio Spector / Dra. Analía Pedernera / Dra. Claudia Bagnes / Dr. Gustavo Bondulich / Prof.Dra. María Cristina De Salvo',
    date: '28',
    month: 'Junio',
    year: '2012',
    time: '19:00',
    modality: 'Presencial',
    description: 'Conferencia: "Diagnóstico y tratamiento del Mesotelioma". Prof.Dr. Carlos Horacio Spector\nDisertación: "Nuestra casuística". Dra. Analía Pedernera\nPresentación de caso a discusión.\n\nPanelistas: Dra. Claudia Bagnes, Dr. Gustavo Bondulich\nCoordinadora: Prof.Dra. María Cristina De Salvo',
    topics: ['Mesotelioma'],
  },
  {
    id: 20120726,
    title: 'Tratamiento médico del Mesotelioma',
    speaker: 'Dra. Claudia Bagnes / Dr. Marcelo Guerra / Dr. Gustavo Parrilla / Dr. Carlos Mario Boccia',
    date: '26',
    month: 'Julio',
    year: '2012',
    time: '19:00',
    modality: 'Presencial',
    description: 'Conferencia: "Tratamiento médico del Mesotelioma". Dra. Claudia Bagnes\nPresentación de caso a discusión\nCierre de las sesiones de mesotelioma, entrega de certificados y Lunch\n\nPanelistas: Dr. Marcelo Guerra, Dr. Gustavo Parrilla\nCoordinador: Dr. Carlos Mario Boccia',
    topics: ['Mesotelioma'],
  },
  {
    id: 20120927,
    title: 'Homenaje Dr. Antonio A. Cetrángolo - Procedimientos diagnósticos videoendoscópicos mediastinales',
    speaker: 'Prof.Dr. Juan Manuel Campana / Prof.Dr. Roberto Héctor Lamy / Dra. Marisa Gutierrez / Dr. Carlos Mario Boccia',
    date: '27',
    month: 'Septiembre',
    year: '2012',
    time: '19:00',
    modality: 'Presencial',
    description: 'Conferencia Dr. Antonio A. Cetrángolo\nProf.Dr. Juan Manuel Campana\n\nConferencia: "Procedimientos diagnósticos videoendoscópicos mediastinales"\nProf.Dr. Roberto Héctor Lamy\n\nPresentación de caso a discusión\nDra. Marisa Gutierrez y Dr. Carlos Mario Boccia',
    topics: ['Endoscopía'],
  },
  {
    id: 20121025,
    title: 'Lo nuevo en TB',
    speaker: 'Prof.Dr. Domingo Palmero / Prof.Dr. Vicente Donato',
    date: '25',
    month: 'Octubre',
    year: '2012',
    time: '19:00',
    modality: 'Presencial',
    description: 'Conferencia: "Lo nuevo en TB".\nProf.Dr. Domingo Palmero\n\nPresentación a discusión de caso clínico\nProf.Dr. Vicente Donato.',
    topics: ['Tuberculosis'],
  },
  {
    id: 20121122,
    title: 'Lo nuevo en asma y EPOC',
    speaker: 'Prof.Dra. María Cristina De Salvo / Prof.Dr. Vicente Donato',
    date: '22',
    month: 'Noviembre',
    year: '2012',
    time: '19:00',
    modality: 'Presencial',
    description: '"Lo nuevo en asma y EPOC"\nProf.Dra. María Cristina De Salvo\n\nPresentación de caso a discusión\nProf.Dr. Vicente Donato',
    topics: ['Asma', 'EPOC'],
  },
  
  // 2011
  {
    id: 20110428,
    title: 'Tuberculosis y fiebre persistente - Neumonía Aguda de la Comunidad',
    speaker: 'Dr. Carlos Mario Boccia / Prof.Dra. María Cristina De Salvo',
    date: '28',
    month: 'Abril',
    year: '2011',
    time: '19:00',
    modality: 'Presencial',
    description: '1- Disertación sobre caso clínico: "Tuberculosis y fiebre persistente"\nDr. Carlos Mario Boccia\n\n2 – Conferencia: "Neumonía Aguda de la Comunidad"\nProf.Dra. María Cristina De Salvo',
    topics: ['Tuberculosis', 'Neumonía'],
  },
  {
    id: 20110526,
    title: 'Tumoración dorsal y Tuberculosis - Enfermedades del intersticio',
    speaker: 'Dr. Carlos Mario Boccia / Prof.Dra. María Cristina De Salvo',
    date: '26',
    month: 'Mayo',
    year: '2011',
    time: '19:00',
    modality: 'Presencial',
    description: '1- Disertación sobre Caso Clínico: "Tumoración dorsal y Tuberculosis"\nDr. Carlos Mario Boccia\n\n2- Conferencia: "Enfermedades del intersticio"\nProf.Dra. María Cristina De Salvo',
    topics: ['Tuberculosis', 'Enfermedad Pulmonar Intersticial'],
  },
  {
    id: 20110622,
    title: 'Neumonitis por Hipersensibilidad - Bronquiectasias',
    speaker: 'Dr. Carlos Mario Boccia / Prof.Dra. María Cristina De Salvo',
    date: '22',
    month: 'Junio',
    year: '2011',
    time: '19:00',
    modality: 'Presencial',
    description: '1- Disertación sobre caso clínico: "Neumonitis por Hipersensibilidad"\nDr. Carlos Mario Boccia\n\n2-Conferencia: "Bronquiectasias"\nProf.Dra. María Cristina De Salvo',
    topics: ['Neumonitis por Hipersensibilidad', 'Bronquiectasias'],
  },
  {
    id: 20110728,
    title: 'Traqueobroncopatía Osteocondroplástica - Patología Ocupacional: Anamnesis y Epidemiología',
    speaker: 'Dr. Carlos Mario Boccia / Dra. Lilian Capone',
    date: '28',
    month: 'Julio',
    year: '2011',
    time: '19:00',
    modality: 'Presencial',
    description: '1- Disertación sobre caso clínico: "Traqueobroncopatía Osteocondroplástica"\nDr. Carlos Mario Boccia\n\n2- Conferencia: "Patología Ocupacional: Anamnesis y Epidemiología"\nDra. Lilian Capone',
    topics: ['Patología Ocupacional'],
  },
  {
    id: 20110825,
    title: 'Micobacteriosis Ambiental - Patología Ocupacional: Asbestosis',
    speaker: 'Dr. Carlos Mario Boccia / Dra. Lilian Capone',
    date: '25',
    month: 'Agosto',
    year: '2011',
    time: '19:00',
    modality: 'Presencial',
    description: '1- Disertación sobre caso clínico: "Micobacteriosis Ambiental"\nDr. Carlos Mario Boccia\n\n2- Conferencia: "Patología Ocupacional: Asbestosis"\nDra. Lilian Capone',
    topics: ['Micobacteriosis', 'Patología Ocupacional'],
  },
  {
    id: 20110922,
    title: 'Homenaje al Prof.Dr.Antonio Cetrángolo - Oat cell de pulmón y tuberculosis - Patología Ocupacional: Silicosis - Paracoccidiodomicosis',
    speaker: 'Prof. Juan Manuel Campana / Dr. Carlos Mario Boccia / Dra. Lilian Capone / Dr. Rodrigo Gasteneguy',
    date: '22',
    month: 'Septiembre',
    year: '2011',
    time: '19:00',
    modality: 'Presencial',
    description: '1- Conferencia: "Homenaje al Prof.Dr.Antonio Cetrángolo"\nProf. Juan Manuel Campana\n\n2- Presentación de caso clínico y discusión: "Oat cell de pulmón y tuberculosis"\nDr. Carlos Mario Boccia\n\n3- Conferencia: "Patología Ocupacional: Silicosis"\nDra. Lilian Capone\n\n4- Presentación de caso clínico y discusión: Paracoccidiodomicosis\nDr. Rodrigo Gasteneguy',
    topics: ['Tuberculosis', 'Patología Ocupacional'],
  },
  {
    id: 20111027,
    title: 'NPS: concatenación de errores - NPS: ejercitación con mostración de 20 casos - Tuberculosis Miliar',
    speaker: 'Dr. Carlos Mario Boccia / Dra. Alejandra Iannizzotto',
    date: '27',
    month: 'Octubre',
    year: '2011',
    time: '19:00',
    modality: 'Presencial',
    description: '1- Disertación sobre caso clínico: "NPS: concatenación de errores"\nDr. Carlos Mario Boccia\n\n2- "NPS: ejercitación con mostración de 20 casos"\nDr. Carlos Mario Boccia\n\n3- Presentación de caso clínico: "Tuberculosis Miliar"\nDra. Alejandra Iannizzotto',
    topics: ['Nódulo Pulmonar Solitario', 'Tuberculosis'],
  },
  {
    id: 20111124,
    title: 'Tuberculoma - Nuevos tratamientos en enfermedades obstructivas - Elección de nueva comisión directiva',
    speaker: 'Dr. Miguel Feola / Prof.Dra. María Cristina De Salvo',
    date: '24',
    month: 'Noviembre',
    year: '2011',
    time: '19:00',
    modality: 'Presencial',
    description: '1- Presentación de caso clínico: "Tuberculoma"\nDr. Miguel Feola\n\n2- Conferencia: "Nuevos tratamientos en enfermedades obstructivas"\nProf.Dra. María Cristina De Salvo\n\n3- Elección de nueva comisión directiva:\nPresidente saliente: Dra. M.C. De Salvo\nPresidente entrante: Dr. Carlos Mario Boccia',
    topics: ['Tuberculosis', 'EPOC', 'Asma'],
  },
].sort((a, b) => {
  // Ordenar por fecha (más reciente primero)
  const dateA = new Date(`${a.year}-${a.month}-${a.date}`)
  const dateB = new Date(`${b.year}-${b.month}-${b.date}`)
  return dateB - dateA
})

const SesionesCientificas = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('Todos')

  // Obtener años únicos
  const years = ['Todos', ...Array.from(new Set(sesiones.map(s => s.year))).sort((a, b) => b.localeCompare(a))]

  // Filtrar sesiones
  const filteredSesiones = sesiones.filter((sesion) => {
    const search = searchTerm.toLowerCase()
    const matchesSearch = 
      sesion.title.toLowerCase().includes(search) ||
      sesion.speaker?.toLowerCase().includes(search) ||
      sesion.description?.toLowerCase().includes(search) ||
      sesion.month.toLowerCase().includes(search) ||
      sesion.year.includes(search)
    
    const matchesYear = selectedYear === 'Todos' || sesion.year === selectedYear
    
    return matchesSearch && matchesYear
  })

  // Agrupar por año
  const sesionesByYear = filteredSesiones.reduce((acc, sesion) => {
    if (!acc[sesion.year]) {
      acc[sesion.year] = []
    }
    acc[sesion.year].push(sesion)
    return acc
  }, {})

  const getModalityColor = (modality) => {
    const colors = {
      'Presencial': 'bg-green-50 text-green-700 ring-green-600/20',
      'Híbrido': 'bg-blue-50 text-blue-700 ring-blue-600/20',
      'Online': 'bg-purple-50 text-purple-700 ring-purple-600/20',
    }
    return colors[modality] || 'bg-slate-50 text-slate-700 ring-slate-600/20'
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt="Sesiones científicas de Neumonología"
          src={sesionesImage}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-300 to-primary-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-slate-600 ring-1 ring-slate-900/10 hover:ring-slate-900/20">
                Ciclo anual 2026
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-slate-900 sm:text-7xl">
                Sesiones científicas
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-slate-600 sm:text-xl/8">
                Ciclo anual de ateneos y presentaciones clínicas para especialistas en neumonología. 
                Compartimos conocimientos, casos clínicos y avances en el campo de la salud respiratoria.
              </p>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-300 to-primary-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Course Features Section */}
      <section aria-labelledby="course-heading" className="relative mt-16 sm:mt-24">
        <img
          alt="Curso Intensivo de Neumonología 2026"
          src={cursoImage}
          className="aspect-3/2 w-full object-cover sm:aspect-5/2 lg:absolute lg:aspect-auto lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16"
        />
        <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <h2 id="course-heading" className="font-medium text-primary-600">
              Curso Intensivo de Neumonología 2026
            </h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Formación continua especializada</p>
            <p className="mt-4 text-slate-600">
              Programa diseñado para profesionales que buscan profundizar sus conocimientos en neumonología, 
              con un enfoque integral desde la atención especializada hasta la práctica clínica.
            </p>
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-slate-900">Curso virtual</dt>
                <dd className="mt-2 text-slate-600">Modalidad online para que puedas acceder desde cualquier lugar. Inscripción únicamente online.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Ciclo completo</dt>
                <dd className="mt-2 text-slate-600">Semanal del 5 de marzo al 4 de junio de 2026. Sesiones regulares para un aprendizaje continuo.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Docentes destacados</dt>
                <dd className="mt-2 text-slate-600">Dictado por reconocidos profesores y especialistas de la Sociedad Argentina de Neumonología.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Del especialista a la atención primaria</dt>
                <dd className="mt-2 text-slate-600">Enfoque integral que abarca desde la atención especializada hasta la práctica en atención primaria.</dd>
              </div>
            </dl>
            <div className="mt-10">
              <a 
                href="https://www.ama-med.org.ar/especialidades/detalleCurso/588" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Inscribirse
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-primary-600">Sesiones científicas</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl lg:text-balance">
              Cronología de sesiones
            </p>
            <p className="mt-6 text-lg/8 text-slate-600">
              Histórico de ateneos, presentaciones clínicas y sesiones científicas organizadas por la SAN. 
              Mantenete al día con las últimas actividades académicas.
            </p>
          </div>

          {/* Filtros */}
          <div className="mx-auto mt-10 max-w-2xl lg:max-w-none">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Búsqueda */}
              <div className="relative flex-1 max-w-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="size-5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar sesiones..."
                  className="block w-full rounded-md border-0 bg-white px-3.5 py-2 pl-10 pr-3.5 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
                />
              </div>
              {/* Filtro por año */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="rounded-md border-0 bg-white px-3.5 py-2 text-slate-900 shadow-xs ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
              >
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Timeline */}
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            {(() => {
              // Años con recursos (programas/flyers) disponibles
              const añosConRecursos = ['2025', '2024', '2023', '2022']
              // Combinar años con sesiones y años con recursos
              const todosLosAños = Array.from(new Set([
                ...Object.keys(sesionesByYear),
                ...añosConRecursos
              ])).sort((a, b) => b.localeCompare(a))
              
              if (todosLosAños.length === 0) {
                return (
                  <div className="text-center py-12">
                    <p className="text-sm text-slate-500">No se encontraron sesiones que coincidan con tu búsqueda.</p>
                    {sesiones.length === 0 && (
                      <p className="mt-4 text-sm text-slate-400">
                        Las sesiones científicas se mostrarán aquí una vez que se agreguen.
                      </p>
                    )}
                  </div>
                )
              }
              
              return (
                <div className="space-y-16">
                  {todosLosAños.map((year) => {
                    const sesionesDelAño = sesionesByYear[year] || []
                    return (
                  <div key={year} className="relative">
                    {/* Año */}
                    <div className="sticky top-8 z-10 -ml-4 -mt-2 flex items-baseline gap-x-2 bg-white pb-2 sm:static sm:ml-0 sm:mt-0 sm:pb-4">
                      <h3 className="text-2xl font-bold text-slate-900">{year}</h3>
                      <div className="hidden h-px flex-auto bg-slate-200 sm:block" aria-hidden="true" />
                      {sesionesDelAño.length > 0 ? (
                        <span className="text-sm text-slate-500">{sesionesDelAño.length} sesiones</span>
                      ) : (
                        <span className="text-sm text-slate-500">Programa y flyer disponibles</span>
                      )}
                    </div>

                    {/* Sesiones del año - Mostrar siempre si hay recursos o sesiones */}
                    {(() => {
                      const recursosPorAño = {
                        '2025': { 
                          programa: programa2025Url, 
                          flyer: flyer2025Url,
                          title: 'Curso Intensivo de Neumonología 2025',
                          speaker: 'Sociedad Argentina de Neumonología',
                          description: 'Programa diseñado para profesionales que buscan profundizar sus conocimientos en neumonología, con un enfoque integral desde la atención especializada hasta la práctica clínica.',
                          modality: 'Virtual',
                          topics: ['Formación continua', 'Neumonología'],
                          month: 'Marzo',
                          date: '5',
                        },
                        '2024': { 
                          programa: null, 
                          flyer: flyer2024Url,
                          title: 'Curso Intensivo de Neumonología 2024',
                          speaker: 'Sociedad Argentina de Neumonología',
                          description: 'Formación continua especializada en neumonología con modalidad virtual. Programa completo para profesionales de la salud respiratoria.',
                          modality: 'Virtual',
                          topics: ['Formación continua', 'Neumonología'],
                          month: 'Marzo',
                          date: '5',
                        },
                        '2023': { 
                          programa: programa2023Url, 
                          flyer: flyer2023Url,
                          title: 'Curso Intensivo de Neumonología 2023',
                          speaker: 'Sociedad Argentina de Neumonología',
                          description: 'Ciclo anual de formación teórico-práctica en neumonología con enfoque integral para especialistas y médicos en formación.',
                          modality: 'Virtual',
                          topics: ['Formación continua', 'Neumonología'],
                          month: 'Marzo',
                          date: '5',
                        },
                        '2022': { 
                          programa: programa2022Url, 
                          flyer: flyer2022Url,
                          title: 'Curso Intensivo de Neumonología 2022',
                          speaker: 'Sociedad Argentina de Neumonología',
                          description: 'Programa completo de formación en neumonología que abarca desde la atención especializada hasta la práctica en atención primaria.',
                          modality: 'Virtual',
                          topics: ['Formación continua', 'Neumonología'],
                          month: 'Marzo',
                          date: '5',
                        },
                      }
                      const recursos = recursosPorAño[year]
                      const tieneRecursos = recursos && (recursos.programa || recursos.flyer)
                      
                      if (sesionesDelAño.length === 0 && !tieneRecursos) return null
                      
                      const handleDownloadFlyer = (flyerUrl, year) => {
                        const link = document.createElement('a')
                        link.href = flyerUrl
                        link.download = `flyer_sesiones_cientificas_${year}.png`
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                      }
                      
                      return (
                        <div className="relative mt-6 space-y-8 sm:mt-8">
                          <div className="absolute left-3 top-0 hidden h-full w-px bg-slate-200 sm:block" aria-hidden="true" />
                          
                          {/* Curso del año (si tiene recursos) */}
                          {tieneRecursos && (
                            <div className="relative pl-8 sm:pl-16">
                              <div className="absolute left-0 top-0 hidden h-3 w-3 rounded-full bg-primary-600 ring-4 ring-white sm:block" aria-hidden="true" />
                              
                              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex-1">
                                  <div className="flex items-start gap-x-3 flex-wrap">
                                    <p className="text-base/7 font-semibold text-slate-900">{recursos.title}</p>
                                    {recursos.modality && (
                                      <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ${getModalityColor(recursos.modality)}`}>
                                        {recursos.modality}
                                      </p>
                                    )}
                                  </div>
                                  {recursos.speaker && (
                                    <p className="mt-2 text-sm text-slate-600">
                                      <span className="font-medium">Organizador:</span> {recursos.speaker}
                                    </p>
                                  )}
                                  {recursos.description && (
                                    <p className="mt-2 text-sm text-slate-600">{recursos.description}</p>
                                  )}
                                  {recursos.topics && recursos.topics.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-2">
                                      {recursos.topics.map((topic, idx) => (
                                        <span key={idx} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                                          {topic}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm/6 text-slate-500">
                                    <div className="flex items-center gap-1">
                                      <svg className="size-4 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                      </svg>
                                      <span>{recursos.date} {recursos.month} {year}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-2 sm:mt-0 sm:flex-nowrap">
                                  {recursos.programa && (
                                    <a
                                      href={recursos.programa}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-xs ring-1 ring-slate-300 hover:bg-slate-50"
                                    >
                                      Ver programa
                                    </a>
                                  )}
                                  {recursos.flyer && (
                                    <button
                                      onClick={() => handleDownloadFlyer(recursos.flyer, year)}
                                      className="inline-flex rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-xs ring-1 ring-slate-300 hover:bg-slate-50"
                                    >
                                      Descargar flyer
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Sesiones individuales del año */}
                          {sesionesDelAño.map((sesion) => (
                            <div key={sesion.id} className="relative pl-8 sm:pl-16">
                              <div className="absolute left-0 top-0 hidden h-3 w-3 rounded-full bg-primary-600 ring-4 ring-white sm:block" aria-hidden="true" />
                              
                              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex-1">
                                  <div className="flex items-start gap-x-3 flex-wrap">
                                    <p className="text-base/7 font-semibold text-slate-900">{sesion.title}</p>
                                    {sesion.modality && (
                                      <p className={`mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ${getModalityColor(sesion.modality)}`}>
                                        {sesion.modality}
                                      </p>
                                    )}
                                  </div>
                                  {sesion.speaker && (
                                    <p className="mt-2 text-sm text-slate-600">
                                      <span className="font-medium">Expositor:</span> {sesion.speaker}
                                    </p>
                                  )}
                                  {sesion.description && (
                                    <p className="mt-2 text-sm text-slate-600 whitespace-pre-line">{sesion.description}</p>
                                  )}
                                  {sesion.topics && sesion.topics.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-2">
                                      {sesion.topics.map((topic, idx) => (
                                        <span key={idx} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                                          {topic}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm/6 text-slate-500">
                                    <div className="flex items-center gap-1">
                                      <svg className="size-4 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                      </svg>
                                      <span>{sesion.date} {sesion.month} {sesion.year}</span>
                                    </div>
                                    {sesion.time && (
                                      <div className="flex items-center gap-1">
                                        <svg className="size-4 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <span>{sesion.time}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {sesion.links && sesion.links.length > 0 && (
                                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-0 sm:flex-nowrap">
                                    {sesion.links.map((link, linkIdx) => (
                                      <a
                                        key={linkIdx}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-xs ring-1 ring-slate-300 hover:bg-slate-50"
                                      >
                                        {link.label}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )
                    })()}
                  </div>
                    )
                  })}
                </div>
              )
            })()}
            {filteredSesiones.length > 0 && (
              <p className="mt-8 text-sm text-slate-500 text-center">
                Mostrando {filteredSesiones.length} de {sesiones.length} sesiones
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SesionesCientificas
