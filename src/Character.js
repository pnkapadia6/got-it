import React from 'react';
import classnames from 'classnames';
import _castArray from 'lodash/castArray';

const Character = character => {
  return (
    <div className={classnames('character', {
      'character--dead': character.killedBy
    })}>
      <div className="character-left">
        <div className="character-names">
          <div className="character-name">{character.characterName}</div>
          {character.nickname && <div className="character-nick">({character.nickname})</div>}
        </div>
        <div className="character-family">
          {character.parents && <div className="character-detail"><i>Parents:</i> {character.parents.join('. ')}</div>}
          {character.siblings && <div className="character-detail"><i>Siblings:</i> {character.siblings.join('. ')}</div>}

          {character.marriedEngaged && <div className="character-detail"><i>Married/Engaged To:</i> {_castArray(character.marriedEngaged).join('. ')}</div>}
          {character.parentsOf && <div className="character-detail"><i>Parents Of:</i> {character.parentsOf.join(', ')}</div>}

          {character.serves && <div className="character-detail"><i>Serves:</i> {_castArray(character.serves).join(', ')}</div>}
          {character.servedBy && <div className="character-detail"><i>Served By:</i> {_castArray(character.servedBy).join(', ')}</div>}

          {character.guardianOf && <div className="character-detail"><i>Guardian Of:</i> {_castArray(character.guardianOf).join(', ')}</div>}
          {character.guardedBy && <div className="character-detail"><i>Guarded By:</i> {_castArray(character.guardedBy).join(', ')}</div>}
        </div>
        {character.killed && <div className="character-detail"><i>Killed:</i> {_castArray(character.killed).join(', ')}</div>}
        {character.killedBy && <div className="character-detail"><i>Killed By:</i> {_castArray(character.killedBy).join(', ')}</div>}
      </div>
      <div className="character-right">
        {character.characterImageThumb &&
        <img className="character-image" src={character.characterImageThumb} title={character.actorName} alt={character.characterName} />}
      </div>
    </div>
  );
};

export default Character;
