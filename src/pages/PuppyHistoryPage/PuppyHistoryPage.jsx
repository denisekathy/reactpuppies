import React from 'react';
import PuppyListItem from '../../components/PuppyListItem/PuppyListItem';
import './PuppyHistoryPage.css';

function PuppyHistoryPage(props) {
	return (
		<>
			<h1>Puppy History</h1>
			<div >
				{props.puppies.map(puppy => (
					<PuppyListItem puppy={puppy} key={puppy._id}
          handleDeletePuppy={props.handleDeletePuppy} />
				))}
			</div>
		</>
	);
}

export default PuppyHistoryPage;
