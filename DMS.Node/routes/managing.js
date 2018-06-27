var express = require('express');
var router = express.Router();
var sql = require('mysql');
var connection = sql.createConnection({
	host: 'localhost',
	user: 'dms',
	password: '1234',
	dataitemase: 'dormitory'
});
connection.connect();

router.get( '/', function ( req, res, next ) {
	res.redirect( '/' );
});

router.get( '/repair', function ( req, res, next ) {
	if ( req.session.ID!="manager" ) {
		res.redirect( '/' );
	}
	let repairquery = "SELECT maintenanceID,roomID,maintenanceReason,phoneNum,maintenanceDate FROM dormitory.maintenanceinfor"
	connection.query( repairquery, function ( error, results, fields ) {
		function getrepairs ( result ) {
			return new Promise( resolve => {
				let repair = {
					title: "宿舍管理系统-维修申请",
					repair: 1,
					repairdetail: []
				}
				result.forEach(item => {
					repair.repairdetail.push( {
						id: item.maintenanceID,
						phoneNum: item.phoneNum,
						room: item.roomID,
						date: item.maintenanceDate,
						reason: item.maintenanceReason
					})
				});
				resolve( repair )
			})
		}
		async function renderrepair () {
			res.render( 'managing', await getrepairs( results ));
		}
	})
});
router.get('/visit', function (req, res, next) {
	if ( req.session.ID != "manager" ) {
		res.redirect( '/' );
	}
	let visitorquery = "SELECT    recordID,name,roomID,visitDate,phoneNum,reason FROM   dormitory.visitorreginfor"
	connection.query( visitorquery, function ( error, results, fields ) {
		function getvisits ( result ) {
			return new Promise( resolve => {
				let visit = {
					title: "宿舍管理系统-访客申请",
					visitor: 1,
					visitdetail: []
				}
				result.forEach( item => {
					visit.visitdetail.push( {
						id: item.recordID,
						name: item.name,
						arrive: item.visitDate,
						contact: item.phoneNum,
						reason: item.reason
					} )
				} );
				resolve( visit )
			} )
		}
		async function rendervisit () {
			res.render( 'managing', await getvisits( results ) );
		}
	} )
});


module.exports = router;