package io.javastack.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.javastack.ipldashboard.model.Team;
import io.javastack.ipldashboard.model.Match;
import io.javastack.ipldashboard.repository.MatchRepository;
import io.javastack.ipldashboard.repository.TeamRepository;

@RestController
@CrossOrigin
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

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getTeamByYear(@PathVariable String teamName, @RequestParam int year){
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);

        return matchRepository.getMatchesByTeamBetweenDates(teamName, startDate, endDate);
    }
}
