const mongoose = require('mongoose'); 
const mongooose = require('mongoose-type-url');
const DashboardSchema = new mongoose.Schema({

    end_year:{
        type:String,
        required:false
    },
    intensity:{
        type : Number,
        required:true
    },
    sector:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    insight:{
        type:String,
        required:true
    },
    url:{
        type: mongooose.SchemaTypes.Url,
        required: true
    },
    region :{
        type:String,
        required:true
    },
    start_year:{
        type:String,
        required:false
    },
    impact:{
        type:String,
        required:false
    },
    added:{
        type: Date,
        default:Date.now
    },
    published:{
        type: Date,
        required:false
    },
    country:{
        type:String,
        required:false
    },
    relevance:{
        type : Number,
        required:true
    },
    pestle:{
        type:String,
        required:false
    },
    source:{
        type:String,
        required:true
    },

    title: {
    type: String,
    required: true
    },
    likelihood:{
        type:Number,
        required:true
    },
    timestamps : true
});
module.exports = mongoose.model('datacollections', DashboardSchema);