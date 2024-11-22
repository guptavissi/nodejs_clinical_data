const express = require('express');
const { heartbeatReportRaw, deletePatient, deleteReport, getPatientAllReports, evaluatedHeartbeatReport,getPatient, clearAll } = require('../controllers/controller.js');

const router = express.Router();


router.post('/heartbeat/report/evaluated/:save?', heartbeatReportRaw);
router.delete('/patient/:patientId', deletePatient);
router.delete('/report/:patientId', deleteReport);
router.get('/all-raw-report/:patientId', getPatientAllReports);
router.get('/heartbeat-report/evaluated/:patientId', evaluatedHeartbeatReport);
router.get('/patient/:patientId?', getPatient);


router.delete('/clearAll', clearAll)

module.exports = router;