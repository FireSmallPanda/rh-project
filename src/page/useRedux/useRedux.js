import React from 'react';
import Buttons from './buttons';
import ShowArea from './showAare';
import { Color } from './color'
function useRedux(){
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
            
        </div>
    )
}

export default useRedux