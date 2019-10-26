package org.launchcode.music.controller;
import org.launchcode.music.model.Playlist;
import org.launchcode.music.service.Addplaylist;
import org.launchcode.music.service.Addplaylisttrack;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController

@RequestMapping("/playlist")

public class Playlistcontroller

{
    private Addplaylist addplaylist;
    public Playlistcontroller(Addplaylist addplaylist)
    {
        this.addplaylist = addplaylist;
    }


    @GetMapping

    @ResponseStatus(HttpStatus.OK)

    public List<Playlist> getAll()

    {

        return addplaylist.getAll();

    }



    @PostMapping("/new")

    @ResponseStatus(HttpStatus.OK)

    public Playlist addNew(@RequestBody Playlist playlist)

    {

        return addplaylist.addPlaylist(playlist);

    }

}