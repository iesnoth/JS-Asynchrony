// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
function looping() {
    npc.walkNorth(1400, () => {
        npc.walkEast(1200, () => {
            npc.walkSouth(300, () => {
                npc.walkEast(1500, () => {
                    npc.walkSouth(1500, () => {
                        npc.walkWest(2700, () => {
                            npc.walkNorth(400, () => {
                                looping()
                            })
                        })
                    })
                })
            })
        })
    })
}

looping()

//https://learnopengl.com/In-Practice/2D-Game/Collisions/Collision-detection

// function CheckCollision() { // AABB - AABB collision
//     {
//     // collision x-axis?
//     let collisionX = npc.Position.x + npc.Size.x >= pc.Position.x &&
//             pc.Position.x + pc.Size.x >= npc.Position.x;
//     // collision y-axis?
//     let collisionY = npc.Position.y + npc.Size.y >= pc.Position.y &&
//             pc.Position.y + pc.Size.y >= npc.Position.y;
//         // collision only if on both axes
//         return collisionX && collisionY;
//     }
// }

// CheckCollision()

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)