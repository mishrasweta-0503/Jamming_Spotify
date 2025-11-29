const Spotify = {
    search(term){
        const mockResults = [{id:1,name:"Shape of you",artist:"ed sheeren",album:"divide",uri:""},
            {id:2,name:"cruel summer",artist:"taylor swift",album:"reputation",uri:""},
            {id:3,name:"thank u next",artist:"ariana grande",album:"sweetener",uri:""},
            {id:7,name:"side to side",artist:"ariana grande",album:"sweetener",uri:""},
            {id:8,name:"7 rings",artist:"ariana grande",album:"sweetener",uri:""},
            {id:9,name:"delicate",artist:"taylor swift",album:"reputation",uri:""}]
        return mockResults;
    }
}

export default Spotify;