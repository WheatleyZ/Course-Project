var express = require( 'express' );
var router = express.Router();
var session = require( 'express-session' );
var sql = require( 'mysql' );
var connection = sql.createConnection( {
  host: 'localhost',
  user: 'dms',
  password: '1234',
  database: 'dormitory',
  dateStrings: true
} );
connection.connect();
router.use( session( {
  secret: '2015211911',
  cookie: { path: '/' }
} ) );
//登录界面
router.get( '/login', function ( req, res, next ) {
  if ( req.session.userID ) {
    res.redirect( '/' );
  }
  res.render( 'index', {
    title: "宿舍管理系统",
    login: true
  } );
} )
//登出请求
router.get( '/logout', function ( req, res, next ) {
  req.session.destroy( ( err ) => { if ( err ) console.log( err ) } );
  res.redirect( '/' );
} )
//登录请求
router.post( '/login', function ( req, res, next ) {
  console.log( req.body );
  if ( req.body.username == "admin" && req.body.password == "admin" ) {
    console.log( "legit" );
    req.session.userID = "manager";
    req.session.save( ( err ) => { if ( err ) console.log( err ) } );
  }
} );
//首页显示
router.get( '/', function ( req, res, next ) {
  let roomquery = "SELECT roomID,dormitoryinfor.dormitoryID,dormitoryadmininfor.name \
                    FROM dormitory.roominfor,dormitory.dormitoryinfor,dormitory.dormitoryadmininfor \
                    WHERE roominfor.dormitoryID=dormitoryinfor.dormitoryID \
                    AND dormitoryinfor.dormitoryAdminID=dormitoryadmininfor.dormitoryAdminID"
  let studentquery = "SELECT studentinfor.studentID,studentinfor.name,studentinfor.gender,roominfor.roomID \
                    FROM dormitory.studentinfor,dormitory.roominfor \
                    WHERE (\
                        roominfor.bedAstuID=studentinfor.studentID \
                        OR roominfor.bedBstuID=studentinfor.studentID \
                        OR roominfor.bedCstuID=studentinfor.studentID \
                        OR roominfor.bedDstuID=studentinfor.studentID\
                      ) \
                      AND roominfor.roomID = "
  let loginstate = ( req.session.userID == "manager" )
  let renderdata = []

  connection.query( roomquery, function ( error, results, fields ) {
    function getroom ( room ) {
      return new Promise( resolve => {
        let roomdetail = {
          roomno: room.roomID,
          dorm: room.dormitoryID,
          admin: room.name,
          student: []
        }
        connection.query( studentquery + room.roomID, function ( error, results, fields ) {
          results.forEach( student => {
            let studentdetail = {
              name: student.name,
              id: student.studentID,
              gender: student.gender
            }
            roomdetail.student.push( studentdetail );
          } )
          resolve( roomdetail )
        } )
      } )
    }
    async function renderlist ( array ) {
      for ( let i = 0; i < array.length; i++ ) {
        renderdata.push( await getroom( array[ i ] ) );
      }
      res.render( 'index', {
        title: "宿舍管理系统",
        logged: loginstate,
        room: renderdata
      } )
    }
    renderlist( results );
  } );
} );
//申请首页
router.get( '/requests', function ( req, res, next ) {
  let loginstate = ( req.session.userID == "manager" )
  res.render( 'requests', {
    title: "宿舍管理系统-申请选择",
    home: 1,
    logged: loginstate
  } );
} );
//维修申请
router.get( '/requests/repair', function ( req, res, next ) {
  let loginstate = ( req.session.userID == "manager" )
  res.render( 'requests', {
    title: "宿舍管理系统-维修申请",
    repair: 1,
    logged: loginstate,
    repairdetail: [ {
      id: 1,
      name: "李四",
      room: "606",
      item: "日光灯",
      reason: "灯管烧坏了"
    } ]
  } );
} );
//访客申请
router.get( '/requests/visit', function ( req, res, next ) {
  let loginstate = ( req.session.userID == "manager" )
  res.render( 'requests', {
    title: "宿舍管理系统-访客申请",
    visitor: 1,
    logged: loginstate,
    visitordetail: [ {
      id: 1,
      name: "张三",
      arrive: "2018/01/01 12:00",
      leave: "2018/01/01 13:00",
      contact: "13012341234",
      reason: "看望学生"
    } ]
  } );
} );
//提交维修
router.post( '/requests/repair', function ( req, res, next ) {
  var addSql = 'INSERT INTO dormitory.maintenanceinfor (roomID,maintenanceDate,maintenanceReason,phoneNum) VALUES(?,?,?,?)';
  var addSqlParams = [ req.body.room, req.body.date, req.body.reason, req.body.contact ];
  console.log( addSqlParams );
  connection.query( addSql, addSqlParams, function ( err, results, fields ) {
    if ( err ) {
      console.log( err );
    } else {
      console.log( results );
    }
  } )
} )
//提交访客
router.post( '/requests/visit', function ( req, res, next ) {
  var addSql = 'INSERT INTO dormitory.visitorreginfor (name,gender,roomID,visitDate,reason,phoneNum) VALUES(?,?,?,?,?,?)';
  var addSqlParams = [ req.body.name, req.body.gender, req.body.room2, req.body.date2, req.body.reason2, req.body.contact2 ];
  console.log( addSqlParams );
  connection.query( addSql, addSqlParams, function ( err, results, fields ) {
    if ( err ) {
      console.log( err );
    } else {
      console.log( results )
    }
  } )
} )
//维修管理
router.get( '/managing/repair', function ( req, res, next ) {
  let repairquery = "SELECT maintenanceID,roomID,maintenanceReason,phoneNum,maintenanceDate FROM dormitory.maintenanceinfor"
  connection.query( repairquery, function ( error, results, fields ) {
    function getrepairs ( result ) {
      return new Promise( resolve => {
        let repair = {
          title: "宿舍管理系统-维修申请",
          repair: 1,
          repairdetail: []
        }
        result.forEach( item => {
          repair.repairdetail.push( {
            id: item.maintenanceID,
            phoneNum: item.phoneNum,
            room: item.roomID,
            date: item.maintenanceDate,
            reason: item.maintenanceReason
          } )
        } );
        console.log(repair);
        
        resolve( repair )
      } )
    }
    async function renderrepair () {
      res.render( 'managing', await getrepairs( results ) );
    }
    renderrepair();
  } )
} );
//访客管理
router.get( '/managing/visit', function ( req, res, next ) {
  let visitorquery = "SELECT    recordID,name,roomID,visitDate,phoneNum,reason FROM   dormitory.visitorreginfor"
  connection.query( visitorquery, function ( error, results, fields ) {
    function getvisits ( result ) {
      return new Promise( resolve => {
        let visit = {
          title: "宿舍管理系统-访客申请",
          visitor: 1,
          visitordetail: []
        }
        result.forEach( item => {
          visit.visitordetail.push( {
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
    rendervisit();
  } )
} );

module.exports = router;
