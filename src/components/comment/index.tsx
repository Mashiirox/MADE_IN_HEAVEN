import GitalkComponent from 'gitalk/dist/gitalk-component';

import 'gitalk/dist/gitalk.css';

interface CommentProps {
  title: string;
}

function Comment({ title }: CommentProps): JSX.Element {
  return (
    <GitalkComponent
      options={{
        clientID: '7134ff1c7af78c3f7bdf',
        clientSecret: 'd2c54280daadca07020d03754b6a6d7aa7f744c2',
        repo: 'gitalk_comment',
        owner: 'Mashiirox',
        admin: ['Mashiirox'],
        distractionFreeMode: false,
        title,
      }}
    />
  );
}

export default Comment;
