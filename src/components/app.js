import { h } from 'preact';
import { Router } from 'preact-router';

import ControlPanel from './control-panel';

// Code-splitting is automated for `routes` directory
import Joysticks from '../routes/joysticks';
import Settings from '../routes/settings';
import Load from '../routes/load';
import Save from '../routes/save';
import ChromaKey from '../routes/chroma-key';

const App = () => (
	<main id="app">
		<ControlPanel />
		<div id="infohelp">
			Double-click to add a widget to the screen<br/>
			Press ESC to exit chromakey
		</div>
		<span id="ruler" class="ui-widget ui-widget-content"></span>
		<Router>
			<Joysticks path="/joysticks" />
			<Settings path="/settings" />
			<Load path="/load" />
			<Save path="/save" />
			<ChromaKey path="/chroma-key" />
		</Router>
	</main>
)

export default App;
