package org.launchcode.music.repository;
import org.launchcode.music.model.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface PlaylistRepository extends JpaRepository<Playlist, Long>

{

    List<Playlist> findByTitleContaining(String title);



}