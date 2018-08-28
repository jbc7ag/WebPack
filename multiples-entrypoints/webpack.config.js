const path=require('path');
//const ExtractTextPlugin=require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    mode: 'development',
    entry: {
        home:       path.resolve(__dirname,'src/js/index.js'),
        contacto:   path.resolve(__dirname,'src/js/contacto.js'),
        precios:    path.resolve(__dirname,'src/js/precios.js')
           
        },
    output:{
            path:path.resolve(__dirname,'dist'),
            filename:'js/[name].js'
    },
    module:{

        //Aqui van los loadres, nos permite soportar archivos
        rules: [
            {
                //test: que tipo de archivo quiero reconocer
                //use : que loader se va encargar del archivo
                test:/\.css$/,
                //use: ['style-loader','css-loader'],
                use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
                  //ExtractTextPlugin.extract({
                   // fallback:'style-loader',
                   // use:'css-loader'
                ]
            }


        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
           // new ExtractTextPlugin("css/estilos.css")
        //Aqui ponemos los plugins
    ]
}