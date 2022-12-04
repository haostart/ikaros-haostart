package run.ikaros.server.entity;

import org.hibernate.annotations.Type;
import run.ikaros.server.enums.SeasonType;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Lob;
import javax.persistence.Table;

import static javax.persistence.FetchType.LAZY;

/**
 * @author guohao
 * @date 2022/09/10
 */
@Entity
@Table(name = "season")
public class SeasonEntity extends BaseEntity {

    @Enumerated(EnumType.STRING)
    private SeasonType type = SeasonType.FIRST;

    @Column(name = "anime_id", nullable = false)
    private Long animeId = -1L;

    private String title;

    @Column(name = "title_cn")
    private String titleCn;

    @Lob
    @Basic(fetch = LAZY)
    @Type(type = "org.hibernate.type.TextType")
    private String overview;


    public String getTitle() {
        return title;
    }

    public SeasonEntity setTitle(String title) {
        this.title = title;
        return this;
    }

    public SeasonType getType() {
        return type;
    }

    public SeasonEntity setType(SeasonType type) {
        this.type = type;
        return this;
    }

    public String getOverview() {
        return overview;
    }

    public SeasonEntity setOverview(String overview) {
        this.overview = overview;
        return this;
    }

    public String getTitleCn() {
        return titleCn;
    }

    public SeasonEntity setTitleCn(String titleCn) {
        this.titleCn = titleCn;
        return this;
    }

    public Long getAnimeId() {
        return animeId;
    }

    public SeasonEntity setAnimeId(Long animeId) {
        this.animeId = animeId;
        return this;
    }
}
