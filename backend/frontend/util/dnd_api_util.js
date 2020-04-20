export const getMonsters = () => (
  $.ajax({
    type: "GET",
    url: "http://www.dnd5eapi.co/api/monsters/"
  })
)

export const getMonster = (index) => (
  $.ajax({
    type:"GET",
    url: `http://www.dnd5eapi.co/api/monsters/${index}`
  })
)