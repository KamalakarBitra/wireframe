export const blocksData = [
    [
        {
            name: 'Block 1',
            loadfunction: 'simpleimgload',
            hide: 0,
            type: ['image'],
            action : {
                x: 1,
                y: 0,
                func_name: 'submitForm',
                param: {
                  x: 0,
                  y: 2,
                  func_name: 'eventHandlertable',
                  param: {}
                }
              }         
        },
        {
            name: 'Block 2',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
        },
        {
            name: 'Block 3',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['form'],
            action : {  
                x: 0,
                y: 2,
                func_name: 'submitForm',
                param: {
                  x: 1,
                  y: 3,
                  func_name: 'eventHandlertable',
                  param: {}
                }
              }     
        },
        {
            name: 'Block 4 ',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image', 'form']
            
        }

    ],
    [
        {
            name: 'Block 1',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
            
        },
        {
            name: 'Block 2',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
            
        },
        {
            name: 'Block 3',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
            
        },
        {
            name: 'Block 4 ',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
            
        }

    ],
    [
        {
            name: 'Block 1',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
            
        },
        {
            name: 'Block 2',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
            
        },
        {
            name: 'Block 3',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
            
        },
        {
            name: 'Block 4 ',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
            
        }

    ],
    [
        {
            name: 'Block 1',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
            
        },
        {
            name: 'Block 2',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
            
        },
        {
            name: 'Block 3',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
            
        },
        {
            name: 'Block 4 ',
            loadfunction: 'simpleimgload',
            hide: 0,
            events: "click",
            type: ['image']
            
        }

    ]
]