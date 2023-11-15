StartupEvents.registry('item', e => {
    function make_bag(bagName, displayName, texture, rarity, glow){
            e.create(bagName)
            .displayName(displayName)
            .texture(texture)
            .rarity(rarity)
            .glow(glow)
        }   
          
    for (let i = 0; i < global.pouch_name.length; i++) {
        make_bag(`${global.bag_name[i]}_bag_common`, global.pouch_name[i], global.pouch_color_map[global.pouch_color[i]], global.rarity[0], false)
        make_bag(`${global.bag_name[i]}_bag_rare`, global.pouch_name[i], global.pouch_color_map[global.pouch_color[i]], global.rarity[1], false)
        make_bag(`${global.bag_name[i]}_bag_epic`, global.pouch_name[i], global.pouch_color_map[global.pouch_color[i]], global.rarity[2], true)
    }
})