import React from "react";

import './row.scss';

function Row(props) {
	return(
		<div className="row">
			<div className="avatar-container">
				<img className="repo-avatar" src="https://vignette.wikia.nocookie.net/powercruncharchive/images/b/bd/Baldur.png/revision/latest?cb=20180628024921"/>
			</div>
			<div className="content-container">
				<h2 className="title" children="Tensorflow"/>
				<p className="text" children="An open source machine learning library for everyone" />
				<div className="bottom-info">
					<div className="info-badge stars">Stars: 118k</div>
					<div className="info-badge issues">Issues: 1.6k</div>
					<div className="submit-info">Submitted 30 days ago by Tensorflow</div>
				</div>
			</div>
		</div>
	)
}

export default Row;
