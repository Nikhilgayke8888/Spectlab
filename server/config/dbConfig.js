module.exports={
    HOST:'localhost',
    USER:'admin',
    PASSWORD:'qwertyuiop123',
    DB:'mr',
    dialect:'mysql',

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
}