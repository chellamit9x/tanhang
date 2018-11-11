module.export = {
    attributes: {
        name: { type: 'string', require: true },
        email: { type: 'string', require: true, unique: true },
        password: { type: 'string', require: true },
        avatar: { type: 'string', defaultsTo: 'avatar.jpg' },
        isAdmin: { type: 'boolean', defaultsTo: true },
        isActive: { type: 'boolean', defaultsTo: true }
    }
}