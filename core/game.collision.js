// /js/core/game.collision.js

/** Game Collision Module
 * Called by the game loop, this module will
 * check the current state for any collision
 * that has taken place in the game on the 
 * current state / update.
 */

 function gameCollision (scope) {
    return function collision(tFrame) {
        var state = scope.state || {};

        // If there are entities, iterate through them and call their 'collision' methods
        if (state.hasOwnProperty('entities')) {
            var entities = state.entities;
            for (var entity in entities) {
                // For each 'bullet' entity check for collision with other active entities
            	if (entities[entity].group === 'bullet') {
            		for (var entityOther in entities) {
            			if (entities[entityOther].collides && entityOther !== entity) {
            				// Fire off each active entities 'collision' method
            				entities[entity].collision(entities[entityOther]);            				
            			} else continue;
            		}
            	}
            }
        }

        return state;
    };
}

module.exports = gameCollision;

 