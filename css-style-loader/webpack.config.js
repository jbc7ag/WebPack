const path=require('path');


module.exports={
    mode: 'development',
    entry: path.resolve(__dirname,'index.js'),
    output:{
            path:path.resolve(__dirname,'dist'),
            filename:'bundle.js'
    },
    module:{

        //Aqui van los loadres, nos permite soportar archivos
        rules: [
            {
                //test: que tipo de archivo quiero reconocer
                //use : que loader se va encargar del archivo
                test:/\.css$/,
                use: ['style-loader','css-loader'],
            }


        ]
    }
}