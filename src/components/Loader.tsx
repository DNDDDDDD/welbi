import {Segment, Dimmer, Loader, Image} from 'semantic-ui-react';

export const Loading = () => (<Segment size='massive'>
	<Dimmer active inverted>
		<Loader size='massive'>Loading</Loader>
	</Dimmer>

	<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
</Segment>);
