
module.exports = {

    attributes: {
      title: {
        type: 'string',
        required: true
      },
  
      author: {
        type: 'string',
        required: true
      },
  
      imageThumbnail: {
        type: 'string',
        required: true
      },
      
      shortContent: {
        type: 'string',
        columnType: "LONGTEXT",
        required: true
      },
      content: {
        type: 'string',
        columnType: "LONGTEXT",
        required: true
      },
  
      tags: {
        collection: 'tag',
        via: 'blogPosts'
      },

      slugs: {
        type: 'string',
      }
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
  
  
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
  
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  
    },
  
  };
  