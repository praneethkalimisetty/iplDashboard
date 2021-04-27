package io.javastack.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.javastack.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>{
    Team findByTeamName(String teamName);
}
