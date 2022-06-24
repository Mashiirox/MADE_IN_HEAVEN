import GitalkComponent from 'gitalk/dist/gitalk-component';
import 'gitalk/dist/gitalk.css';

import './index.scss';

type CommentProps = { id: string };

function Comment({ id }: CommentProps): JSX.Element {
  return (
    <GitalkComponent
      options={{
        clientID: '7134ff1c7af78c3f7bdf',
        clientSecret: 'd2c54280daadca07020d03754b6a6d7aa7f744c2',
        repo: 'MADE_IN_HEAVEN',
        owner: 'Mashiirox',
        admin: ['Mashiirox'],
        id: `code:${id}`,
        distractionFreeMode: false,
      }}
    />
  );
}

export default Comment;
