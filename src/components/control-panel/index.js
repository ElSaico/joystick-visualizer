import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const ControlPanel = () => (
	<header class={style.header}>
		<h6 class={style.title}><img class={style.app_icon} src="/favicon.ico" alt="teal"/> <a href="..">teal</a> joystick</h6>
		<p id="info_text"><a href="http://www.teall.info/2019/03/joystick-visualizer.html">More info and help</a></p>
		<div class={style.seria_name}></div>

		<nav>
			<Link href="/joysticks">joysticks</Link>
			<Link href="/settings">settings</Link>
			<a>clear</a>
			<Link href="/load">load</Link>
			<Link href="/save">save</Link>
			<Link href="/chroma-key">chromakey</Link>
		</nav>
		<p id="loading_text">Loading libraries, please wait a bit...</p>
	</header>
)

export default ControlPanel;
