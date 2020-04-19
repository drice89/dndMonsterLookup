export const getMonsters = () => (
  $.ajax({
    type: "GET",
    url: "http://www.dnd5eapi.co/api/monsters/"
  })
)