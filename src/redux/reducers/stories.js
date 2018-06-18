import _ from "lodash";

const RECEIVE_NEW_STORIES = "STORIES:RECEIVE_NEW_STORIES";
const ADD_NEW_STORY = "STORIES:ADD_NEW_STORY";
const ADD_NEW_STORY_SUCCESS = "STORIES:ADD_NEW_STORY_SUCCESS";
const ADD_NEW_STORY_FAILED = "STORIES:ADD_NEW_STORY_FAILED";
const GIVE_STORY_LOVE = "STORIES:GIVE_STORY_LOVE";
const GIVE_STORY_LOVE_SUCCESS = "STORIES:GIVE_STORY_LOVE_SUCCESS";
const GIVE_STORY_LOVE_FAILED = "STORIES:GIVE_STORY_LOVE_FAILED";

const onReceiveNewStories = newStories => ({
  type: RECEIVE_NEW_STORIES,
  payload: {
    newStories,
  },
});

const addNewStory = newStory => ({
  type: ADD_NEW_STORY,
  payload: {
    newStory,
  },
});

const giveStoryLove = (id, amount) => ({
  type: GIVE_STORY_LOVE,
  payload: {
    id,
    amount,
  },
});

export const actionTypes = {
  RECEIVE_NEW_STORIES,
  ADD_NEW_STORY,
  ADD_NEW_STORY_SUCCESS,
  ADD_NEW_STORY_FAILED,
  GIVE_STORY_LOVE,
  GIVE_STORY_LOVE_SUCCESS,
  GIVE_STORY_LOVE_FAILED,
};

export const actions = { onReceiveNewStories, addNewStory, giveStoryLove };

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_NEW_STORIES:
      if (state.length === 0) {
        return _.sortBy(action.payload.newStories, ["when", "createAt"]);
      } else {
        return _.sortBy([...state, ...action.payload.newStories], ["when", "createAt"]);
      }
    case ADD_NEW_STORY:
      return state;
    case ADD_NEW_STORY_SUCCESS:
      return state;
    case ADD_NEW_STORY_FAILED:
      return state;
    case GIVE_STORY_LOVE:
      return state;
    case GIVE_STORY_LOVE_SUCCESS:
      return state;
    case GIVE_STORY_LOVE_FAILED:
      return state;
    default:
      return state;
  }
};
