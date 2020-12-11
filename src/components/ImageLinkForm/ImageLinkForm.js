import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'This Magic Brain will sometimes detect faces in your pictures! Sometimes it likes to have a lay in, so it might not want to cooperate, but you will still have a lovely picture displayed below! Why not give it a try...'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;