const path=require('path');
//const ExtractTextPlugin=require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpack=require('webpack');

module.exports={
    mode: 'development',
    entry: {
       modules:['react','react-dom'],

    },
    output:{
            path:path.resolve(__dirname,'dist'),
            filename:'[name].js',
            library:'[name]',
    },
    plugins: [
       
            new webpack.DllPlugin({

                path: path.join(__dirname,"[name]-manifest.json"),
                name:'[name]',

            })

       /* new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
       */
           // new ExtractTextPlugin("css/estilos.css")
        //Aqui ponemos los plugins
    ],
   optimization:{

        splitChunks:{
            cacheGroups:{
                vendor: {
                    name:"vendor",
                    chunks:'initial',
                    test:'vendor',
                    enforce:true
                }
            }
        }
    }
}