const Database = require('./db')
    const createProffy = require('./createProffy')
Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: 'Marcela Vieira',
        avatar: 'https://avatars3.githubusercontent.com/u/66480371?s=460&u=c2dd7a956a6db5ae00fc9c1f6d34cc0e26b3bd99&v=4',
        whatsapp: '998271494',
        bio: 'Proffy de Português!',
        
    }

    classValue = {
        subject: 1,
        cost: '45',
        //o proffy id virá pelo banco de dados.
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados após o cadastro da class (aula.)
        {
        weekday: 1,
        time_from: 720,
        time_to: 1220
        },
        {
        weekday: 0,
        time_from: 520,
        time_to: 1220
        }
    ]
    
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    //consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado proffy
    //e trazer junto os dados do proffy
    
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 08h - 18h
    //o horário do time_form (8h) precisa ser menor ou igual ao horário solicitado
    //o time_to precisa ser acima

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.* 
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "521"
        AND class_schedule.time_to > "1219"
    `)
    console.log(selectClassesSchedules)
})

 