import mongooose from 'mongoose'

const productSchema = mongoose.schema({
    name:{
        type:String,
        required:[true,"Please Enter the product Name"],
    },
    description:{
        type: String,
        required:[true,"please enter the product description"],
    },
    price:{
        type:Number,
        required:[true,"Enter the price of the product"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            product_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please enter the product category"]
    },
    stock:{
        type:Number,
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }
},{
    timestamps: true
})
const product = mongoose.model('Product',productSchema)
export default product
