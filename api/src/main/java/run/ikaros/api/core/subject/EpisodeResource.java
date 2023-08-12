package run.ikaros.api.core.subject;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class EpisodeResource {
    @JsonProperty("file_id")
    private Long fileId;
    @JsonProperty("episode_id")
    private Long episodeId;
    private String url;
    private boolean canRead;
    private String name;
    /**
     * Such as 1080p 720p.
     */
    private Set<String> tags;
    private List<Subtitle> subtitles;
}
