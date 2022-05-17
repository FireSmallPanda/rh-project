import React from 'react';
import AddBack from './AddBack';
import AddColor from './AddColor';
import ShowArea from './showAare';
import { Color } from './color'
function useRedux(){
    return (
        <div>
            <Color>
                <ShowArea />
                <AddBack />
                <AddColor />
            </Color>
            
        </div>
    )
}

export default useRedux