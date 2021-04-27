package io.javastack.ipldashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import io.javastack.ipldashboard.model.Team;
import io.javastack.ipldashboard.repository.MatchRepository;
import io.javastack.ipldashboard.repository.TeamRepository;

@RestController
public class TeamController {
    
    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team")
    public Iterable<Team> getAllTeam() {
        return this.teamRepository.findAll();
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        Team team = teamRepository.findByTeamName(teamName);
        if(team != null){
            team.setMatches(matchRepository.findLatestMatchesByTeam(teamName, 4));
        }
        return team;
    }
}
