import AnswerList from '../collections/answer-list';

const questionListData = [
  {
    name: 'c1',
    image: 'https://placeimg.com/640/480/nature',
    description: 'If I ran out water in a desert, What can I do?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: 'Drink from a cactus',
        value: 0
      },
      {
        description: 'Drink your urine',
        value: 2
      }
    ])
  },
  {
    name: 'c2',
    image: 'https://placeimg.com/640/480/nature',
    description: 'How many drinks of coffe can I drink without die?',
    multiple: false,
    answersList: new AnswerList([
      {
        description: '98',
        value: 0
      },
      {
        description: '27',
        value: 30
      },
      {
        description: '12',
        value: 0
      }
    ])
  },
  {
    name: 'e1',
    image: 'https://placeimg.com/640/480/nature',
    description: 'What color is the sky?',
    multiple: true,
    answersList: new AnswerList([
      {
        description: 'Blue',
        value: 6
      },
      {
        description: 'Purple',
        value: 6
      },
      {
        description: 'White',
        value: 6
      },
      {
        description: 'Red',
        value: 20
      }
    ])
  },
  {
    name: 'e2',
    description: 'What color is the moon?',
    multiple: true,
    answersList: new AnswerList([
      {
        description: 'White',
        value: 6
      },
      {
        description: 'Black',
        value: 6
      }
    ])
  }
];

export default questionListData;
