import { ADD_SKILL } from '../actions'

let defaultState = ['RPG', 'Java', 'React']

const SkillsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_SKILL:
            return state.push(action.newSkill)

        default:
            return state
    }
}

export default SkillsReducer