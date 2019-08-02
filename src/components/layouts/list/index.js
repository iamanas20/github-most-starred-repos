import React from "react";
import Row from '../row/index.js';
import './list.scss';

var moment = require('moment');

function List(props) {
	return(
		<div className="list">
			{
				(props.items !== undefined) &&
				props.items.map(function(item, i){
					console.log(item);
					return (
						<Row 
							key={i}
							avatar={item.owner.avatar_url}
							title={item.name} 
							description={item.description}
							stars={abbreviateNumber(item.stargazers_count)}
							issues={abbreviateNumber(item.open_issues_count)}
							date={moment(item.created_at, "YYYYMMDD").fromNow()}
							owner={item.owner.login}
						/>
					) 
				})
			}
		</div>
	)
}

function abbreviateNumber(value) {
	var newValue = value;
	if (value >= 1000) {
			var suffixes = ["", "k", "m", "b","t"];
			var suffixNum = Math.floor( (""+value).length/3 );
			var shortValue = '';
			for (var precision = 2; precision >= 1; precision--) {
				shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
				var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
				if (dotLessShortValue.length <= 2) { break; }
			}
			if (shortValue % 1 != 0)  {
				shortValue = shortValue.toFixed(1)
			};
		newValue = shortValue+suffixes[suffixNum];
	}
	return newValue;
}

export default List;