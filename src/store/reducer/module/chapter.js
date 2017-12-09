var defaultState = {
    
}

function chapter(state = defaultState,action){
     var states = Object.assign({},state);
     switch(action.type){
     	case 'GETCHAPTERLIST':
     	    return {
     	    	...states,
     	    	chapterlist: action.payload.chapter,
                source: action.payload.source
     	    }
     	case 'GETCHAPTERCONTENT':
     	    return {
     	    	...states,
     	    	body: action.payload.body
     	    }
     	case 'GETCHANGESOURCECHAPTER':
     	    return {
     	    	...states,
     	    	body: action.payload.body
     	    }
     	case 'GETCHANGESOURCECHAPTERLIST':
     	    return {
     	    	...states,
     	    	chapterlist: action.payload.chapter
     	    }
     	default :
     	    return states
     }
}

export default chapter;