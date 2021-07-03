const {exec} = require('child_process')

exec('pwd', {cwd:'/cursos/soporte'}, (err, stdout, stderr) => {
    console.log(stdout)
})

