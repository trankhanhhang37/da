const { model, Schema } = require('mongoose')
const slugify  = require('slugify')
const DOCUMENT_NAME = 'Blog'
const COLLECTION_NAME = 'blogs'

const blogSchema = new Schema({
    blog_name: { type: String, required: true },
    topic_id: { type: String, default: '0' },
    blog_description: String,
    blog_image: { type: Array, default: [] },
    blog_slug: String,
    blog_title: String,
    blog_detail: String,
    isPublished: { type: Boolean, default: true, index: true, select: false },

},
    {
        collection: COLLECTION_NAME,
        timestamps: true
    })
    blogSchema.pre('save', function (next) {
        this.blog_slug = slugify(this.blog_name, { lower: true })
        next();
    })
    blogSchema.index({ blog_name: 'text' });
    

module.exports = {
    blog: model(DOCUMENT_NAME, blogSchema)
}