const path=require('path');
//const ExtractTextPlugin=require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack=require('webpack');

module.exports={
    mode: 'development',
    entry: {
      // vendor:['react','react-dom'],
       home: path.resolve(__dirname,'src/js/index.js'),
       contact: path.resolve(__dirname,'src/js/contact.js')
    },
    output:{
            path:path.resolve(__dirname,'dist'),
            filename:'[name].js'
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
                {
               loader:"css-loader",
                options:{ 
                    modules:true,
                    importLoaders: 1
                    }
 
                },
                'postcss-loader'
                ]

            },

            {
                //test: que tipo de archivo quiero reconocer
                //use : que loader se va encargar del archivo
                test:/\.scss$/,
                //use: ['style-loader','css-loader'],
                use: [
                MiniCssExtractPlugin.loader,
                "css-loader","sass-loader"
                  //ExtractTextPlugin.extract({
                   // fallback:'style-loader',
                   // use:'css-loader'
                ]
            },
            {
                //test: que tipo de archivo quiero reconocer
                //use : que loader se va encargar del archivo
                test:/\.styl$/,
                //use: ['style-loader','css-loader'],
                use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader:"stylus-loader",
                    options:{
                        use:[
                            require('nib'),
                            require('rupture')

                        ],
                    import:[
                            '~nib/lib/nib/index.styl',
                            '~rupture/rupture/index.styl'
                        ]
                    }
                
                
                }
                   //ExtractTextPlugin.extract({
                   // fallback:'style-loader',
                   // use:'css-loader'
                ]
            },
            {
                //test: que tipo de archivo quiero reconocer
                //use : que loader se va encargar del archivo
                test:/\.less$/,
                //use: ['style-loader','css-loader'],
                use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader:"less-loader",
                    options:{
                        noIeCompat:true
                    }
            
                }
                  //ExtractTextPlugin.extract({
                   // fallback:'style-loader',
                   // use:'css-loader'
                ]
            },
            { //Babel loader.

                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }

                
            },
            {  //image Loader
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 100000
                    }
                  }
                ]
              },
              {  //File Loader
                test: /\.(woff|eot|ttf|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        limit: 400000
                      }
                  }
                ]
              }


        ]
    },
    plugins: [
       
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
       
        new webpack.DllReferencePlugin({

            manifest:require('./modules-manifest.json')
        })
           // new ExtractTextPlugin("css/estilos.css")
        //Aqui ponemos los plugins
    ]/*,
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
   }*/
}