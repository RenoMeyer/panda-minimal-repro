import React, { FC } from 'react';
import { styled } from 'panda/jsx';
import 'common/index.css'

const PandaDiv = styled('div');

const App: FC = () => {
    return (
        <PandaDiv bg='primary'>
            <h1>Panda - glob issue</h1>
        </PandaDiv>
    );
};

export default App;
